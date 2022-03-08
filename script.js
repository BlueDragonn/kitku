let kitku = {
    display: function (type, maxPhotoNumber) {
        document.querySelector(".image").src =
        "cats/" +
         type + "/pic (" + 
        Math.floor(Math.random() * maxPhotoNumber + 1)+ 
        ").jpg";
    }
}
kitku.display('heart', 15);

document.querySelector(".button1").addEventListener("click", function () {
    kitku.display('heart', 42);
  });

  document.querySelector(".button-36").addEventListener("click", function () {
    kitku.display('reaction', 42); //nomral number
  });

///cats/heart/0.jpg