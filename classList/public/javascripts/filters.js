// ! Search filter

(function() {
	const form = document.querySelector('.settingsection-form');

	form.addEventListener('submit', (event) => {
		event.preventDefault();
	});

	const searchInput = document.getElementById('searchInput');

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

			console.log(searchValue);

			console.log(type);

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
