/*let body = document.getElementById("MAIN");
let Nextbutton = document.getElementById("Next");
let Nextbutton2 = document.getElementById("Next2");
let Nextbutton3 = document.getElementById("Next3");
let Nextbutton4 = document.getElementById("Next4");
let Nextbutton5 = document.getElementById("Next5");
let Nextbutton6 = document.getElementById("Next6");
let Nextbutton7 = document.getElementById("Next7");
let Nextbutton8 = document.getElementById("Next8");
let Nextbutton9 = document.getElementById("Next9");
let Nextbutton10 = document.getElementById("Next10");
Nextbutton.addEventListener("click",LESSON);
 function LESSON () {
  window.location.replace("system2.html");
}
Nextbutton2.addEventListener("click",LESSON2);
 function LESSON2 () {
  window.location.replace("system3.html");
}
Nextbutton3.addEventListener("click",LESSON3);
 function LESSON3 () {
  window.location.replace("system4.html");
}
Nextbutton4.addEventListener("click",LESSON4);
 function LESSON4 () {
  window.location.replace("system5.html");
}
Nextbutton5.addEventListener("click",LESSON5);
 function LESSON5 () {
  window.location.replace("system6.html");
}
Nextbutton6.addEventListener("click",LESSON6);
 function LESSON6 () {
  window.location.replace("system7.html");
}
Nextbutton7.addEventListener("click",LESSON7);
 function LESSON7 () {
  window.location.replace("system8.html");
}
Nextbutton8.addEventListener("click",LESSON8);
 function LESSON8 () {
  window.location.replace("system9.html");
}
Nextbutton9.addEventListener("click",LESSON9);
 function LESSON9 () {
  window.location.replace("system10.html");
  alert("congratulations!!! you have finished the course");
  alert("redirecting to certification page")
  window.location.replace("certification.html");
}
*/

var see = document.getElementById("see");
see.addEventListener("click", Details);
var paragraph = document.getElementById("para");
function Details(){
  paragraph.innerHTML=`Finally we have external styling this is done in a seperate css file, you create a seperate file on your code editor and call it style.css and then link this page to your html page by adding this code to the head part of your html page < link rel="stylesheet" href="style.css">CSS tags\n The following are very important when writing your css code \n1: Element followed by {} this is called the curly brace\n e.g image{ then inside the curly brace you write your codes}  \nProperties and values:\n\npadding: The padding has to do with the size of your html element, do you want it to be bug inside or you want to reduce it\n lets make use of the image tag say i want to style an image picture on my html page\n image{  padding:20px; }take note of the codes i used, 20px is the value while padding is the property \n\n2:Margin: \n Margin has to do with the space surrounding your html element, like you want to give your html element so outside spacing, you use your margin to specify that\n\n it could be margin-top, or margin-bottom,margin-left,margin-right,margin:auto;e.g\n\n This time i would use an Id \n #container{ margin:auto;margin-right:50px;CSS tags\n The following are very important when writing your css code \n1: Element followed by {} this is called the curly brace\n e.g image{ then inside the curly brace you write your codes}\nProperties and values:\n\npadding: The padding has to do with the size of your html element, do you want it to be bug inside or you want to reduce it\n lets make use of the image tag say i want to style an image picture on my html page\n image{ padding:20px;} take note of the codes i used, 20px is the value while padding is the property \n\n2:Margin: \n Margin has to do with the space surrounding your html element, like you want to give your html element so outside spacing, you use your margin to specify that\n\n it could be margin-top, or margin-bottom,margin-left,margin-right,margin:auto;e.g\n\n This time i would use an Id \n #container margingin:auto;margin-right:50px; } e.t.c\n`;
  see.remove();
  
  Unseen();
};
let button =document.getElementById("less");
function Unseen(){
  button.innerHTML=`See less`
}
button.addEventListener("click",remove);
function remove (){
  var see = document.getElementById("see");
  button.innerHTML=`see more`
  paragraph.innerHTML="";
}
function New(){
  paragraph.innerHTML=`Finally we have external styling this is done in a seperate css file, you create a seperate file on your code editor and call it style.css and then link this page to your html page by adding this code to the head part of your html page < link rel="stylesheet" href="style.css">\n\n CSS tags\n The following are very important when writing your css code \n1: Element followed by {} this is called the curly brace\n e.g image{ then inside the curly brace you write your codes 
    }\nProperties and values:\n\npadding: The padding has to do with the size of your html element, do you want it to be bug inside or you want to reduce it\n lets make use of the image tag say i want to style an image picture on my html page\n\nimage{
      padding:20px; 
    } take note of the codes i used, 20px is the value while padding is the property \n\n2:Margin:\n \n Margin has to do with the space surrounding your html element, like you want to give your html element space outside spacing, you use your margin to specify that\n\n it could be margin-top, or margin-bottom,margin-left,margin-right,margin:auto;e.g\n\n This time i would use an Id \n\n #container{
    margin:auto;
    margin-right:50px;
      } e.t.c\n `;
}
const test = document.getElementById("test")
test.addEventListener("click",TEST);
function TEST(){
  window.location.replace("https://www.proprofs.com/quiz-school/story.php?title=html-css-javascript-quiz");
}

const link = document.getElementById("Link");
link.addEventListener("click",redirect);

function redirect(){
    window.location.replace("system.html");
}
