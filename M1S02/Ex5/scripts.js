const dogUrl ="https://dog.ceo/api/breeds/image/random";
const catUrl="https://api.thecatapi.com/v1/images/search";

window.onload = () => {
	var n = parseInt(window.prompt('Digite um número entre 1 e 10'));
	if (n < 1 || n > 10) {
		n = 4;
		alert('Valor não válido. Número 4 será adotado por padrão');
	}
	console.log(n);
	for (let i = 0; i < n; ++i) createElements();
}

function createElements() {
	const container = document.getElementById("container");
	const div = document.createElement("div");
	div.className="pets";
	
	fetch(dogUrl)
	.then(resp => resp.json())
	.then(data => {
		let imageAdress = data.message;
		const img = document.createElement("img");
		img.src=imageAdress;
		
		const section1 = document.createElement("section");
		section1.appendChild(img);
		div.appendChild(section1);
		container.appendChild(div);
		console.log(imageAdress);
	});

	fetch(catUrl)
	.then(resp => resp.json())
	.then(data => {
		let imageAdress = data[0].url;
		const img = document.createElement("img");
		img.src=imageAdress;

		const section2 = document.createElement("section");
		section2.appendChild(img);
		div.appendChild(section2);
		container.appendChild(div);
		console.log(imageAdress);

	});

}
