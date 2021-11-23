function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeBackground(){
	let length = 1000;
	let countSup=0, countInf=0, count10=0;
	const numbers=[];

	for (let i = 0; i < length; i++){
		numbers[i] = getRandomIntInclusive(1, length);
		if (numbers[i] > (length/2)) {
			countSup += 1;
		} else if (numbers[i] <= (length/2)) {
			countInf += 1;
			if (numbers[i] === (length * 0.1)) {
				count10 += 1;
			}
		}
	}

	if (count10 === 1){
		document.getElementById("root").style.background = "orange";
	}
	else if (count10 > 1) {
	 	document.getElementById("root").style.background = "black";
	}
	else if (countSup > countInf) {
		document.getElementById("root").style.backgroundImage = "url('https://i.picsum.photos/id/172/200/300.jpg?hmac=Z5LhQNM9g-UdcCGfryluTaIrxwIaAD_pMo_izKB2nuA')";
		console.log(">");
	}else if (countSup < countInf) {
		document.getElementById("root").style.backgroundImage = "url('https://via.placeholder.com/500.png')";
		console.log("<");
	}
	console.log(count10 + " " + countSup + " " + countInf + " ");
}