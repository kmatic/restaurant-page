import { renderHeader, renderMain, renderFooter } from './website';

const content = document.querySelector('#content');

content.appendChild(renderHeader());
content.appendChild(renderMain());
content.appendChild(renderFooter());