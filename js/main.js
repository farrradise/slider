var test = document.getElementsByTagName('img');
var test2 = document.getElementsByTagName("p");
var index = 0;
var image, text;
function a() {
  setInterval(leTest, 3000);
}

function leTest(){
   if (index== 4) {
     index = 0;
     image = test[index];
     text = test2[index];
     image.style.zIndex = "2";
     text.style.zIndex = "3"
     test[4].style.zIndex = "1";
     test2[4].style.zIndex="-2";
   } else {
    index++;
    image = test[index];
    text = test2[index];
    image.style.zIndex = "2";
    text.style.zIndex = "3";
    test[index-1].style.zIndex = "1";
    test2[index-1].style.zIndex = "-2";
   }
 }
