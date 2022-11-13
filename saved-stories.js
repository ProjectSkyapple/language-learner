window.addEventListener('load', () => {
    createCard('Test Title', 'English', 'Advanced', 'This is a test');
})

const searchButton = document.querySelector('#search-submit-btn');

searchButton.addEventListener('click', () => {
    window.open('results.html');
})

function createCard(name, language, level, contentPreview){

    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('width', '18rem');

    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    cardTitle.textContent = name;
    const cardSubtitle = document.createElement('h6');
    cardSubtitle.className = 'card-subtitle mb2 text-muted';
    cardSubtitle.textContent = `${level} ${language}`;

    const cardText = document.createElement('p');
    cardText.textContent = contentPreview;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);

    document.body.appendChild(card);

    console.log('card created');
}

