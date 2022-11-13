const searchButton = document.querySelector('#search-submit-btn');

window.addEventListener('load', () => {

    getData();

}

)

async function createCard(name, language, level, contentPreview, itemNumber) {

    const headers_ = {
        'Authorization': 'Bearer keyJkBNLRleuG08RI',
        'Content-Type': 'application/json'
    };
    let headerInfo = { headers: headers_ };
    let airtableDataJson = await axios.get("https://api.airtable.com/v0/app3Vz9dBticvev18/Stories?maxRecords=100&view=Grid%20view", headerInfo);
    let recordsArray = airtableDataJson.data.records;

    var para = new URLSearchParams();
    console.log(JSON.stringify(recordsArray[itemNumber]))
    para.append("record", recordsArray[itemNumber].id);
    storyViewLink = "story-view.html?" + para.toString();
    const main = document.createElement("div");
    main.className = "main";
    const card = document.createElement('div');
    card.className = 'card';
    card.className = "cardActual";

    //card.setAttribute('width', '100px');

    const cardBody = document.createElement('div');
    cardBody.className = "infoInCard";
    const cardTitle = document.createElement('a');
    cardTitle.className = "card-title";
    cardTitle.textContent = name;
    cardTitle.setAttribute('href', storyViewLink);
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
    document.body.appendChild(main);
    console.log('card created');
}

async function getData() {

    const headers_ = {
        'Authorization': 'Bearer keyJkBNLRleuG08RI',
        'Content-Type': 'application/json'
    };
    let headerInfo = { headers: headers_ };
    let airtableDataJson = await axios.get("https://api.airtable.com/v0/app3Vz9dBticvev18/Stories?maxRecords=100&view=Grid%20view", headerInfo);
    let recordsArray = airtableDataJson.data.records;

    for (let i = 0; i < recordsArray.length; i++) {

        var storyTitle = recordsArray[i].fields.Title;
        var storyMain = recordsArray[i].fields.Story;
        var storyLanguage = recordsArray[i].fields.Language;
        var storyDifficulty = recordsArray[i].fields.Difficulty;
        createCard(storyTitle, storyLanguage, storyDifficulty, storyMain, i);

    }

}