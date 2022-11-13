window.addEventListener(
    'load', async function () {
        var para = new URLSearchParams(window.location.search);
        var pass = para.get("record");
        const headers_ = {
            'Authorization': 'Bearer keyJkBNLRleuG08RI',
            'Content-Type': 'application/json'
        };
        let headerInfo = { headers: headers_ };
        let airtableDataJson = await axios.get("https://api.airtable.com/v0/app3Vz9dBticvev18/Stories/" + pass, headerInfo);
        let storyTitle = airtableDataJson.data.fields.Title;
        let storyContent = airtableDataJson.data.fields.Story;
        let storyLanguage = airtableDataJson.data.fields.Language;
        let storyDifficulty = airtableDataJson.data.fields.Difficulty;

        const title = document.createElement('h1');
        title.textContent = storyTitle;

        const languageAndLevel = document.createElement('p');
        languageAndLevel.textContent = storyDifficulty + " " + storyLanguage;

        const content = document.createElement('article');
        content.textContent = storyContent;

        document.body.appendChild(title);
        document.body.appendChild(languageAndLevel);
        document.body.appendChild(content);
    }
)
