const corDeFundo = ["#000000","#1A1A1A","#1A3D4C"];
const corDosElementosSobrepostos= ["#E6E6E6","#CCCCCC","#0D2526"];
const corDoTexto = ["white","black"];

function changeColors(){
	document.getElementById("texto").style.color = corDoTexto[getRandomIntInclusive(0, 1)];
	document.getElementById("container").style.backgroundColor = corDeFundo[getRandomIntInclusive(0, 2)];
	const sobrepostos = document.getElementsByClassName("sobreposto");
	sobrepostos[getRandomIntInclusive(0, sobrepostos.length-1)].style.backgroundColor = corDosElementosSobrepostos[getRandomIntInclusive(0, 2)];
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}