// ! Search filter

(function() {
    
    let form = document.querySelector('.settingsection-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    })
        
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
            
            console.log(cardsTitleValue);

            let type = card.dataset = cardsTitleValue;

            console.log(type);

            // Length of the input value
            let length = searchValue.length;

            let match = type.slice(0, length);

            if (searchValue === match) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    })

}) ();