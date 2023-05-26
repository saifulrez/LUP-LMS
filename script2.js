


function after(){
  var pop = document.getElementById("pop");
  pop.innerHTML=`<div style="color:white;margin-top:10%;text-align:center;"> <p style="font-weight:1050;font: San serrif; font-size:15px;">  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe3aZkNchxE2-Im97K5eSzC2yRFR6RZIimXaR6G8L75vElDgQ/viewform?embedded=true" width="100%" height="350px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> </div> <button id="btn" style="display:flex;justify-content:center;margin:auto;border:none;border-radius:20px;padding:2%; color:white; background:black;width:50%;hover: grey;" onclick="remove();">Ok</button><br>`
  var pop2 = document.getElementById("pop2");
  pop2.remove();
};
setTimeout(later,1000);
function later(){
  var pop = document.getElementById("pop2");
  pop.innerHTML=`<div style="color:white;margin-top:10%;text-align:center;"> <p style="font-weight:1050;font: San serrif; font-size:15px;">  <p> Congratulations you have subscribed to this course make sure you copy and save the  link to this page or bookmark it on your phone !!!</p> </p></div> <button id="btn" style="display:flex;justify-content:center;margin:auto;border:none;border-radius:20px;padding:2%; color:white; background:black;width:50%;hover: grey;" onclick="after();">Ok</button><br>`
}
//setTimeout(after,10000);
  
function remove(){
  var pop = document.getElementById("pop");
  pop.remove();
}
function remove2(){
  var pop = document.getElementById("pop2");
  pop.remove();
}