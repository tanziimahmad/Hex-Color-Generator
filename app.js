

let colorContain = document.querySelector('#container');
let pressColor = document.querySelector('#button');
let shownColor = document.querySelector('#output');


pressColor.addEventListener('click', function () {
	
	let hexaCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	let colors = '#';
	for (let i = 0; i < 6; i++) {
		let random = Math.floor(Math.random() * 15);
		let number = hexaCode[random];
		colors += number;
		console.log(colors);
	}

	shownColor.innerHTML = colors;
	container.style.backgroundColor = colors;

})