const PAGES_BASE_PATH = '/pages';

const PAGES_ROUTES = {
    DSA: `${PAGES_BASE_PATH}/dsa`,
    SYSTEM_DESIGN_FE: `${PAGES_BASE_PATH}/system-design-fe`,
    SYSTEM_DESIGN_BE: `${PAGES_BASE_PATH}/system-design-be`,
    JS_FUNDAMENTALS: `${PAGES_BASE_PATH}/js-fundamentals`,
    JS_QUESTIONS: `${PAGES_BASE_PATH}/js-questions`,
    JS_MACHINE_CODING: `${PAGES_BASE_PATH}/js-machine-coding`,
    CONCEPTS_FE: `${PAGES_BASE_PATH}/concepts-fe`,
    CONCEPTS_BE: `${PAGES_BASE_PATH}/concepts-be`,
    IDE_JS: `${PAGES_BASE_PATH}/ide-js`,
    IDE_REACT: `${PAGES_BASE_PATH}/ide-react`,
};

const updateNavBar = () => {
    const navBar = document.getElementById('navigation-placeholder');
    navBar.innerHTML = `
        <nav class="menu">
            <ul class="menu-list">
                <li class="menu-item dropdown">
                    <a href="${PAGES_ROUTES.DSA}">DSA</a>
                </li>
                <li class="menu-item dropdown">
                    <a href="${PAGES_ROUTES.SYSTEM_DESIGN_FE}">System Design</a>
                    <ul class="dropdown-content">
                        <li class="menu-item"><a href="${PAGES_ROUTES.SYSTEM_DESIGN_FE}">Frontend</a></li>
                        <li class="menu-item"><a href="${PAGES_ROUTES.SYSTEM_DESIGN_BE}">Backend</a></li>
                    </ul>
                </li>
                <li class="menu-item dropdown">
                    <a href="${PAGES_ROUTES.JS_FUNDAMENTALS}">JavaScript</a>
                    <ul class="dropdown-content">
                        <li class="menu-item">
                            <a href="${PAGES_ROUTES.JS_FUNDAMENTALS}">Fundamentals</a>
                        </li>
                        <li class="menu-item"><a href="${PAGES_ROUTES.JS_QUESTIONS}">Questions</a></li>
                        <li class="menu-item">
                            <a href="${PAGES_ROUTES.JS_MACHINE_CODING}">Machine Coding</a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item dropdown">
                    <a href="${PAGES_ROUTES.CONCEPTS_FE}">Concepts</a>
                    <ul class="dropdown-content">
                        <li class="menu-item"><a href="${PAGES_ROUTES.CONCEPTS_FE}">Frontend</a></li>
                        <li class="menu-item"><a href="${PAGES_ROUTES.CONCEPTS_BE}">Backend</a></li>
                    </ul>
                </li>
                <li class="menu-item dropdown">
                    <a>IDE</a>
                    <ul class="dropdown-content">
                        <li class="menu-item"><a href="${PAGES_ROUTES.IDE_JS}" target="_blank">JavaScript</a></li>
                        <li class="menu-item"><a href="${PAGES_ROUTES.IDE_REACT}" target="_blank">React</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    `;
}

updateNavBar();