// ! Search filter

(function() {
	const form = document.querySelector('.settingsection-form');

	form.addEventListener('submit', (event) => {
		event.preventDefault();
	});

	const searchInput = document.getElementById('searchInput');

	const select = document.getElementById('classSelect');

	const wholeCard = document.querySelectorAll('.cardsection-card');

	const cardClass = document.getElementById('cardClass');

	const cardSection = document.querySelector('.cardsection');

	// function classFilter (noClass, A, B) {
	// 	let selectedValue = select.options[select.selectedIndex].value;

	// 	console.log(cardClass.textContent);

	// 	if (cardClass.textContent = '1IMA') {

	// 		if (selectedValue = 'A') {
	// 			cardClass.parentElement.style.display = 'none';
	// 		}
	// 	}

	// 	noClass = select.children[0];
	// 	A = select.children[1];
	// 	B = select.children[2];
	// 	console.log(A, B, noClass);

	// 	console.log(A.value);
	// 	console.log(cardClass.parentElement);

	// 	if (select.children[1] = selected) {
	// 		if (cardClass.textContent = '1IMA') {
	// 			cardClass.parentElement.style.display = 'none';
	// 		}

	// 	}

	// }

	let classTitleValue = wholeCard;
	console.log(classTitleValue);

	let selectedValue = select.options;
	console.log(select.children[0].textContent = '');

	// for (let i = 0; i < wholeCard.length; i++) {

	// 	if (wholeCard[i].children[2].textContent === '1IMA') {

	// 		if (select.children[0].textContent === '') {
	// 			wholeCard[i].style.display = 'grid';

	// 		} else if (select.children[1].textContent === 'A') {
	// 			wholeCard[i].style.display = 'grid';

	// 		} else if (select.children[2].textContent === 'B') {
	// 			wholeCard[i].style.display = 'none';
	// 		}

	// 	} else if (wholeCard[i].children[2].textContent === '1IMB') {
			
	// 		if (select.children[0].textContent === '') {
	// 			wholeCard[i].style.display = 'grid';

	// 		} else if (select.children[0].textContent === 'A') {
	// 			wholeCard[i].style.display = 'none';

	// 		} else if (select.children[0].textContent === 'B') {
	// 			wholeCard[i].style.display = 'grid';
	// 		}
	// 	}

	// 	// console.log(select.options[i].active);
	// }

	for (let i = 0; i < wholeCard.length; i++) {

		if (select.children[0].activeElement === true) {
			
			wholeCard[i].children[2].textContent === '1IMA'
				wholeCard[i].style.display = 'grid';			
			

		} else if (select.children[1].activeElement === true) {
			
			wholeCard[i].children[2].textContent === '1IMA'
				wholeCard[i].style.display = 'grid';			
			

		} else if (select.children[2].activeElement === true) {

			wholeCard[i].children[2].textContent === '1IMA'
				wholeCard[i].style.display = 'none';			

		}
		

		if (select.children[0].textContent === '') {

				wholeCard[i].children[2].textContent === '1IMB'
				wholeCard[i].style.display = 'grid';			
		

		} else if (select.children[0].textContent === 'A') {

			wholeCard[i].children[2].textContent === '1IMB'
				wholeCard[i].style.display = 'none';			
			

		} else if (select.children[0].textContent === 'B') {
	
			wholeCard[i].children[2].textContent === '1IMB'
				wholeCard[i].style.display = 'grid';			
		
	
		} 

		console.log(select.children[i]);
	}


	// [].forEach.call(cardSection, (card) => {

	// });

	// [].forEach.call(wholeCard, (card) => {
	// 	let children = select.children;
	// 	console.log(children);

	// 	for (let i = 0; i < children.length; i++) {
	// 		if (children.select = 'A') {
	// 			card.style.display = 'none';
	// 		} else if (children[1]) {
	// 			card.parentElement.style.display = 'none';
	// 		}
	// 	}
	// });

	//eventlistener
	searchInput.addEventListener('keyup', function(event) {
		// getting the searchvalue
		let searchValue = searchInput.value.trim().toLowerCase();

		// selecting all the cardtitles
		const cardsTitle = document.querySelectorAll('.cardsection-card--title');

		const wholeCard = document.querySelectorAll('.cardsection-card');

		// looping through all the items
		[].forEach.call(cardsTitle, (card) => {
			let cardsTitleValue = card.innerHTML;

			// console.log(cardsTitleValue);

			let type = (wholeCard.dataset = cardsTitleValue);

			// console.log(searchValue);

			// console.log(type);

			// Length of the input value
			let length = searchValue.length;

			let match = type.slice(0, length).toLowerCase();

			if (searchValue === match) {
				card.parentElement.style.display = 'block';
			} else {
				card.parentElement.style.display = 'none';
			}
		});
	});
})();
