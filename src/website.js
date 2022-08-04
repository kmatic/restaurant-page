const content = document.querySelector('#content');

const renderHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.classList.add('nav-btn');
    menuBtn.classList.add('nav-btn');
    contactBtn.classList.add('nav-btn');

    homeBtn.setAttribute('id', 'home');
    menuBtn.setAttribute('id', 'menu');
    contactBtn.setAttribute('id', 'contact');

    homeBtn.textContent = 'HOME';
    menuBtn.textContent = 'MENU';
    contactBtn.textContent = 'CONTACT';

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    header.appendChild(nav);

    content.appendChild(header);
}

const renderTitleCard = () => {
    const titleCard = document.createElement('div');
    titleCard.classList.add('titleCard');

    return titleCard;
}

const renderMain = () => {
    const main = document.createElement('main');
    main.classList.add('main');

    content.appendChild(main);
}

const renderFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const author = document.createElement('p');
    author.textContent = 'Made by kmatic';

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/kmatic/';
    githubLink.target = '_blank';

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fa-brands', 'fa-github');

    githubLink.appendChild(githubIcon);
    footer.appendChild(author);
    footer.appendChild(githubLink);

    content.appendChild(footer);
}

export { renderHeader, renderTitleCard, renderMain, renderFooter };