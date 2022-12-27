var intervalo = 5000;

function slide1(){
  document.getElementById("banner").src="paisagem1.jpg";
  setTimeout("slide2()", intervalo);
}
function slide2(){
  document.getElementById("banner").src="paisagem2.jpg";
  setTimeout("slide3()", intervalo);
}
function slide3(){
  document.getElementById("banner").src="paisagem3.jpg";
  setTimeout("slide4()", intervalo);
}
function slide4(){
  document.getElementById("banner").src="paisagem4.jpg";
  setTimeout("slide5()", intervalo);
}
function slide5(){
  document.getElementById("banner").src="paisagem5.jpg";
  setTimeout("slide6()", intervalo);
}
function slide6(){
  document.getElementById("banner").src="paisagem6.jpg";
  setTimeout("slide1()", intervalo);
}