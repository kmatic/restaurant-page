import { renderHeader, renderMain, renderFooter } from './website';
import renderHome from './home';
import { renderMenuItems, renderMenuTitle } from './menu';

const content = document.querySelector('#content');

const header = renderHeader();
const main = renderMain();
const footer = renderFooter();

const menuTitle = renderMenuTitle();
const menu = renderMenuItems();

header.appendChild(menuTitle);
main.appendChild(menu);


content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);