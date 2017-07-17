var test = document.getElementsByTagName('img');
var index = 0;
var image;
function a() {

  setInterval(leTest, 3000);


}

function leTest(){
   if (index== 3) {
     index = 0;
     image = test[index];
     image.style.zIndex = "2";
     test[3].style.zIndex = "1";

   } else {
    index++;
    image = test[index];
    image.style.zIndex = "2";
    test[index-1].style.zIndex = "1";
   }
 } 
