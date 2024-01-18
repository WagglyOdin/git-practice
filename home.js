// get the button
let btn = document.getElementById('ticketBtn');

// get modal
let modal = document.getElementById('ticketModal');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// arrow function for button
btn.onclick = () => {
	modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

let count = 0;
// get counter buttons
let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

// counter logic
updateDisplay();

counterPlusElem.addEventListener('click', () => {
	count++;
	updateDisplay();
});

counterMinusElem.addEventListener('click', () => {
	count--;
	updateDisplay();
});

function updateDisplay() {
	counterDisplayElem.innerHTML = count;
	counterMinusElem.disabled = count === 0;
}

let buyNowBtn = document.getElementById('buyNowBtn');

buyNowBtn.addEventListener('click', () => {
	alert(`You have bought ${count} tickets.`);
});
