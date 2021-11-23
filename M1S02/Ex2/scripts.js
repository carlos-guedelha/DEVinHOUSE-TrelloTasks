let nome, satisfacao, idade, satisfeito;

let nSatisfeitos = 0, nParticipantes = 0, somaIdades = 0, idadeMedia = 0;

function participa(){
	nome = window.prompt("Digite seu nome");
	satisfacao = parseInt(window.prompt("Digite um número de 1 a 10 para expressar sua satisfação"));
	idade = parseInt(window.prompt("Digite sua idade"));
	satisfeito = window.prompt("Podemos incluir você na lista de satisfeitos?").toLowerCase();
	
	nParticipantes += 1;
	if (satisfeito === "sim"){
		nSatisfeitos += 1;
	}

	somaIdades += idade;
	idadeMedia = (somaIdades / nParticipantes);
	console.log(idade + " " + somaIdades + " " + idadeMedia);

	document.getElementById("nParticipantes").innerHTML = nParticipantes;
	document.getElementById("idadeMedia").innerHTML = parseInt(idadeMedia);
	document.getElementById("nSatisfeitos").innerHTML = nSatisfeitos;

	window.alert("Salvo com sucesso");
}