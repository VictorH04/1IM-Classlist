// ! Search filter

(function() {
	const form = document.querySelector('.settingsection-form');

	form.addEventListener('submit', (event) => {
		event.preventDefault();
	});

	const searchInput = document.getElementById('searchInput');

	const select = document.querySelector('.settingsection-form_select');

	const wholeCard = document.querySelectorAll('.cardsection-card');

	const cardClass = document.querySelector('.cardsection-card--className');

	[].forEach.call(wholeCard, (card) => {
		let children = select.children;
		console.log(children);

		for (let i = 0; i < children.length; i++) {
			if (children[0]) {
				card.style.display = 'block';
			} else if (children[1]) {
				card.parentElement.style.display = 'none';
			}
		}
	});

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
