var test = document.getElementsByTagName('img');
var test2 = document.getElementsByTagName("p");
var liste = document.getElementsByTagName('li');
var image, text;
var stop;
var index = 0;
function a() {
   stop = setInterval(leTest, 4000);
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
     liste[0].style.opacity="1";
     liste[4].style.opacity="0.7";
   } else {
    index++;
    image = test[index];
    text = test2[index];
    image.style.zIndex = "2";
    text.style.zIndex = "3";
    test[index-1].style.zIndex = "1";
    test2[index-1].style.zIndex = "-2";
    liste[index].style.opacity="1";
    liste[index-1].style.opacity="0.7";

   }
 }


 for (i = 0; i<liste.length;i++) {
   liste[i].addEventListener("click", function () {changeZIndex(this);});
 }

function changeZIndex(th) {
  var a = th.id;

  switch (a) {
    case "0":
      index=0;
      for (i=0; i < test.length; i++) {
        if (i==0) {
          test[0].style.zIndex = "2";
          test2[0].style.zIndex = "3";
          liste[0].style.opacity="1";
        } else {
          test[i].style.zIndex ="1";
          test2[i].style.zIndex ="-2";
          liste[i].style.opacity="0.7";
        }
      }
      break;

    case "1":
      index= 1;
      for (i=0; i < test.length; i++) {
        if (i==1) {
          test[1].style.zIndex = "2";
          test2[1].style.zIndex = "3";
          liste[1].style.opacity="1";
        } else {
          test[i].style.zIndex ="1";
          test2[i].style.zIndex ="-3";
          liste[i].style.opacity="0.7";
        }
      }
      break;

    case "2":
      index =2;
      for (i=0; i < test.length; i++) {
        if (i==2) {
          test[2].style.zIndex = "2";
          test2[2].style.zIndex = "3";
          liste[2].style.opacity="1";
        } else {
          test[i].style.zIndex ="1";
          test2[i].style.zIndex ="-3";
          liste[i].style.opacity="0.7";
        }
      }

      break;

    case "3":
      index=3;
      for (i=0; i < test.length; i++) {
        if (i==3) {
          test[3].style.zIndex = "2";
          test2[3].style.zIndex = "3";
          liste[3].style.opacity="1";
        } else {
          test[i].style.zIndex ="1";
          test2[i].style.zIndex ="-3";
          liste[i].style.opacity="0.7";
        }
      }

      break;

    case "4":
      index=4;
      for (i=0; i < test.length; i++) {
        if (i==4) {
          test[4].style.zIndex = "2";
          test2[4].style.zIndex = "3";
          liste[4].style.opacity="1";
        } else {
          test[i].style.zIndex ="1";
          test2[i].style.zIndex ="-3";
          liste[i].style.opacity="0.7";
        }
      }

      break;

    default:

  }
}
