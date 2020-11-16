// ! Search filter

(function() {
	const form = document.querySelector('.settingsection-form');

	form.addEventListener('submit', (event) => {
		event.preventDefault();
	});

	const searchInput = document.getElementById('searchInput');

	const select = document.getElementById('classSelect');;

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
	let classTitleValue = cardSection.children;
	console.log(classTitleValue);
	
	let selectedValue = select.options;
	console.log(selectedValue);

	[].forEach.call(wholeCard, (card) => {
		
		
		if (classTitleValue.innerText === '1IMA') {
			
			if (selectedValue.value === 'first') {
				card.style.display = 'grid';
			} 
			else if (selectedValue.value === 'valA') {
				card.style.display = 'grid';
			} 
			else if (selectedValue.value === 'valB') {
				card.style.display = 'none';
			}
			
		} else if (classTitleValue.innerText === '1IMB') {

			if (selectedValue.value === 'first') {
				card.style.display = 'grid';
			} 
			else if (selectedValue.value === 'valA') {
				card.style.display = 'none';
			} 
			else if (selectedValue.value === 'valB') {
				card.style.display = 'grid';
			}
		}
	})

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
		let searchValue = searchInput.value.trim();

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

			let match = type.slice(0, length);

			if (searchValue === match) {
				card.parentElement.style.display = 'block';
			} else {
				card.parentElement.style.display = 'none';
			}
		});
	});
})();
