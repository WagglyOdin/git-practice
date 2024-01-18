// get the buttons and modal
let undeadBtn = document.getElementById('undeadTicketBtn');
let gamestopBtn = document.getElementById('gamestopTicketBtn');
let pokemonBtn = document.getElementById('pokemonTicketBtn');
let modal = document.getElementById('ticketModal');
let span = document.getElementsByClassName('close')[0];
let buyNowBtn = document.getElementById('buyNowBtn');
let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');
let currentBand;

// add event listeners to the ticket buttons
undeadBtn.onclick = () => {
	currentBand = 'Undead Bois';
	openModal();
};

gamestopBtn.onclick = () => {
	currentBand = 'Gamestop Bois';
	openModal();
};

pokemonBtn.onclick = () => {
	currentBand = 'Pokemon Bois';
	openModal();
};

// function to open the modal
function openModal() {
	modal.style.display = 'block';
	updateModalContent();
	count = 0;
	updateDisplay();
}

// function to update the modal content based on the current band
function updateModalContent() {
	document.getElementById('modalBandName').textContent = currentBand;
}

// when the user clicks on <span> (x), close the modal
span.onclick = () => {
	modal.style.display = 'none';
};

// when the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

let count = 0;

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

// add event listener to the Buy Now button
buyNowBtn.addEventListener('click', () => {
	alert(`You have bought ${count} tickets for ${currentBand}.`);
	modal.style.display = 'none';
});
