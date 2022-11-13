window.addEventListener(
    'load', () => {
        const title = document.createElement('h1');
        title.textContent = 'insert title here (backend)';

        const languageAndLevel = document.createElement('p');
        languageAndLevel.textContent = 'insert language and level here';

        const content = document.createElement('article');
        content.textContent = 'insert content here';

        document.body.appendChild(title);
        document.body.appendChild(languageAndLevel);
        document.body.appendChild(content);
    }
)