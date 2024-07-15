const PAGES_BASE_PATH = 'pages';

const getPagesRoutes = function(baseUrl) {
    return {
        DSA: `${baseUrl}/${PAGES_BASE_PATH}/dsa`,
        SYSTEM_DESIGN_FE: `${baseUrl}/${PAGES_BASE_PATH}/system-design-fe`,
        SYSTEM_DESIGN_BE: `${baseUrl}/${PAGES_BASE_PATH}/system-design-be`,
        JS_FUNDAMENTALS: `${baseUrl}/${PAGES_BASE_PATH}/js-fundamentals`,
        JS_QUESTIONS: `${baseUrl}/${PAGES_BASE_PATH}/js-questions`,
        JS_MACHINE_CODING: `${baseUrl}/${PAGES_BASE_PATH}/js-machine-coding`,
        CONCEPTS_FE: `${baseUrl}/${PAGES_BASE_PATH}/concepts-fe`,
        CONCEPTS_BE: `${baseUrl}/${PAGES_BASE_PATH}/concepts-be`,
        IDE_JS: `${baseUrl}/${PAGES_BASE_PATH}/ide-js`,
        IDE_REACT: `${baseUrl}/${PAGES_BASE_PATH}/ide-react`,
    }
};

const updateNavBar = (baseUrl) => {
    const navBar = document.getElementById('navigation-placeholder');
    const pagesRoutes = getPagesRoutes(baseUrl);
    navBar.innerHTML = `
        <nav class="menu">
            <ul class="menu-list">
                <li class="menu-item dropdown">
                    <a href="${pagesRoutes.DSA}">DSA</a>
                </li>
                <li class="menu-item dropdown">
                    <a href="${pagesRoutes.SYSTEM_DESIGN_FE}">System Design</a>
                    <ul class="dropdown-content">
                        <li class="menu-item"><a href="${pagesRoutes.SYSTEM_DESIGN_FE}">Frontend</a></li>
                        <li class="menu-item"><a href="${pagesRoutes.SYSTEM_DESIGN_BE}">Backend</a></li>
                    </ul>
                </li>
                <li class="menu-item dropdown">
                    <a href="${pagesRoutes.JS_FUNDAMENTALS}">JavaScript</a>
                    <ul class="dropdown-content">
                        <li class="menu-item">
                            <a href="${pagesRoutes.JS_FUNDAMENTALS}">Fundamentals</a>
                        </li>
                        <li class="menu-item"><a href="${pagesRoutes.JS_QUESTIONS}">Questions</a></li>
                        <li class="menu-item">
                            <a href="${pagesRoutes.JS_MACHINE_CODING}">Machine Coding</a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item dropdown">
                    <a href="${pagesRoutes.CONCEPTS_FE}">Concepts</a>
                    <ul class="dropdown-content">
                        <li class="menu-item"><a href="${pagesRoutes.CONCEPTS_FE}">Frontend</a></li>
                        <li class="menu-item"><a href="${pagesRoutes.CONCEPTS_BE}">Backend</a></li>
                    </ul>
                </li>
                <li class="menu-item dropdown">
                    <a>IDE</a>
                    <ul class="dropdown-content">
                        <li class="menu-item"><a href="${pagesRoutes.IDE_JS}" target="_blank">JavaScript</a></li>
                        <li class="menu-item"><a href="${pagesRoutes.IDE_REACT}" target="_blank">React</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    `;
}