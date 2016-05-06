var html = document.getElementById("html");
var css = document.getElementById("css");
var javascript = document.getElementById("javascript");

html.addEventListener("click", picLink);
css.addEventListener("click", picLink);
javascript.addEventListener("click", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);

  for (var i = 0; i < allImages.length; i++) {
    // Add "hide" class to all images, except for the current one. Otherwise in the next if statement the pic.className will always be "hide" which means the "else" statement will never be executed.
    if (allImages[i] !== pic){
      allImages[i].className = "hide";
    }
  }

  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
  console.log(pic.className);
}
