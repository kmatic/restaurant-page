import { renderHeader, renderMain, renderFooter } from './website';
import renderHome from './home';
import { renderMenuItems, renderMenuTitle } from './menu';
import { renderContact, renderLocation } from './contact';

const loadPage = () => {
    renderHeader();
    renderMain();
    renderFooter();
    renderHome();

    const header = document.querySelector('.header');
    const main = document.querySelector('.main');

    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const contact = document.querySelector('#contact');

    home.addEventListener('click', () => {
        main.textContent = '';
        header.removeChild(header.lastElementChild);
        renderHome();
    })

    menu.addEventListener('click', () => {
        main.textContent = '';
        header.removeChild(header.lastElementChild);
        renderMenuItems();
        renderMenuTitle();
    })

    contact.addEventListener('click', () => {
        main.textContent = '';
        header.removeChild(header.lastElementChild);
        renderContact();
        renderLocation();
    })
}

loadPage();
