import { renderHeader, renderMain, renderFooter } from './website';
import renderHome from './home';

const content = document.querySelector('#content');

const header = renderHeader();
const main = renderMain();
const footer = renderFooter();

const home = renderHome();

main.appendChild(home);

content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);