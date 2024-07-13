const ROUTE_NAMES = {
    DSA_FE: 'dsa-fe',
    DSA_BE: 'dsa-be',
    SYSTEM_DESIGN_FE: 'system-design-fe',
    SYSTEM_DESIGN_BE: 'system-design-be',
    JS_FUNDAMENTALS: 'js-fundamentals',
    JS_QUESTIONS: 'js-questions',
    JS_MACHINE_CODING: 'js-machine-coding',
    CONCEPTS_FE: 'concepts-fe',
    CONCEPTS_BE: 'concepts-be',
    IDE_JS: 'ide-js',
    IDE_REACT: 'ide-react',
}

const routes = {
    '': '<h1>Home Page</h1>',
    [ROUTE_NAMES.DSA_FE]: generateContent(`./data/${[ROUTE_NAMES.DSA_FE]}.json`),
    [ROUTE_NAMES.DSA_BE]: '<h1>DSA BE</h1>',
    [ROUTE_NAMES.SYSTEM_DESIGN_FE]: generateContent(`./data/${[ROUTE_NAMES.SYSTEM_DESIGN_FE]}.json`),
    [ROUTE_NAMES.SYSTEM_DESIGN_BE]: '<h1>System Design BE</h1>',
    [ROUTE_NAMES.JS_FUNDAMENTALS]: generateContent(`./data/${[ROUTE_NAMES.JS_FUNDAMENTALS]}.json`),
    [ROUTE_NAMES.JS_QUESTIONS]: generateContent(`./data/${[ROUTE_NAMES.JS_QUESTIONS]}.json`),
    [ROUTE_NAMES.JS_MACHINE_CODING]: generateContent(`./data/${[ROUTE_NAMES.JS_MACHINE_CODING]}.json`),
    [ROUTE_NAMES.CONCEPTS_FE]: generateContent(`./data/${[ROUTE_NAMES.CONCEPTS_FE]}.json`),
    [ROUTE_NAMES.CONCEPTS_BE]: '<h1>Concepts BE</h1>',
    [ROUTE_NAMES.IDE_JS]: '<iframe height=700px width=100% src="https://stackblitz.com/edit/js?embed=1"></iframe>',
    [ROUTE_NAMES.IDE_REACT]: '<iframe height=700px width=100% src="https://stackblitz.com/edit/react?embed=1"></iframe>',
};

async function generateContent(filePath) {
    const json = await fetch(filePath);
    const data = await json.json();

    return `
            <center>
                <h1>${data.name}</h1>
            </center>
            <hr class="divider"/>
            <ul class="topics-list">
                ${data.topics?.map(t => `
                    <li class="question">
                        <h2>${t.name}</h2>
                        <ul class="questions-list">
                            ${t.questions?.map(q => `
                                <li class="question">
                                    <h3>${q.question}</h3>
                                    ${q.answer ? `<p>${q.answer}</p>` : ''}
                                    ${q.link ? `<div class="link"><a href=${q.link} target="_blank">${q.link}</a></div>` : ''} 
                                    ${q.hints ? `<pre><code>${q.hints}</code></pre>` : ''} 
                                </li>
                                <hr />
                            `).join('')}
                        </ul>
                    </li>
                    <hr class="divider"/>
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