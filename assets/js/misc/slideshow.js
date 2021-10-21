
var i = 0;
var images = [];
var time = 2000;

images[0] = "seating-viewing-1.png";
images[2] = "seating-viewing-2.png";
images[3] = "seating-viewing-3.png";
images[4] = "seating-viewing-4.png";

function changeImage(){
  document.slide.src = images[i];
  if(i < images.length - 1){
    i++;
  }else{
    i = 0
  }
  setTimeout("changeImage()", time);
}

window.onload = changeImage;
