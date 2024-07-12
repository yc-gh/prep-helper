const filePaths = {
    'dsa': './data/dsa.json',
    'system-design': './data/system-design.json',
    'js-fundamentals': './data/js-fundamentals.json',
    'js-questions': './data/js-questions.json',
    'concepts-basics': './data/concepts-basics.json',
    'concepts-advanced': './data/concepts-advanced.json',
};

const routes = {
    '': '<h1>Home Page</h1>',
    'dsa': '<h1>DSA Page</h1>',
    'system-design': '<h1>System Design Page</h1>',
    'js-fundamentals': generateContent(filePaths['js-fundamentals']),
    'js-questions': generateContent(filePaths['js-questions']),
    'js-ide': '<iframe height=700px width=100% src="https://stackblitz.com/edit/js?embed=1"></iframe>',
    'concepts-basics': '<h1>Concepts Basics Page</h1>',
    'concepts-advanced': '<h1>Concepts Advanced Page</h1>',
};

async function generateContent(dataFile) {
    const json = await fetch(dataFile);
    const data = await json.json();
    return `
            <center>
                <h1>${data.name}</h1>
            </center>
            <center>${data.description}</center>
            <hr />
            <ul class="questions-list">
                ${data.questions?.map(q => `
                    <li class="question">
                        <h2>${q.question}</h2>
                        <p>${q.answer}</p>
                        <pre><code>${q.example}</code></pre>
                    </li>
                    <hr />
                `).join('')}
            </ul>
        `;
}

// Function to update content based on the current route
async function updateContent() {
    const hash = window.location.hash || ''; // Default to #home if no hash
    const path = hash.substring(1); // Remove the # from the hash
    if (routes[path]) {
        const data = await routes[path];
        document.getElementById('content').innerHTML = data;
    }
    else {
        document.getElementById('content').innerHTML = '<h1>404 Not Found</h1>';
    }
}

// Listen for hash changes
window.addEventListener('hashchange', updateContent);

// Update content on initial load
updateContent();