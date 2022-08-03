const renderHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const leftNav = document.createElement('nav');
    const rightNav = document.createElement('nav');

    leftNav.classList.add('nav-left');
    rightNav.classList.add('nav-right');

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    const rightLogo = document.createElement('i');

    homeBtn.classList.add('nav-btn');
    menuBtn.classList.add('nav-btn');
    contactBtn.classList.add('nav-btn');
    rightLogo.classList.add('fa-solid', 'fa-drumstick-bite');

    homeBtn.textContent = 'HOME';
    menuBtn.textContent = 'MENU';
    contactBtn.textContent = 'CONTACT';

    leftNav.appendChild(homeBtn);
    leftNav.appendChild(menuBtn);
    leftNav.appendChild(contactBtn);
    rightNav.appendChild(rightLogo);
    header.appendChild(leftNav);
    header.appendChild(rightNav);

    return header;
}

const renderMain = () => {
    const main = document.createElement('main');
    main.classList.add('main');

    const titleCard = document.createElement('div');
    titleCard.classList.add('titleCard');

    const backgroundImg = document.createElement('div');
    backgroundImg.classList.add('backgroundImage');

    main.appendChild(titleCard);
    main.appendChild(backgroundImg);
    
    return main;
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

    return footer;
}

export { renderHeader, renderMain, renderFooter };