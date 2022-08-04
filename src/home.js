import { renderTitleCard } from "./website";

const renderHome = () => {
    const titleCard = renderTitleCard();

    const home = document.createElement('div');
    home.classList.add('title');

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'CHICKEN';

    const homeSpan = document.createElement('span');
    homeSpan.textContent = 'MANOK';

    const homeIcon = document.createElement('i');
    homeIcon.classList.add('fa-solid', 'fa-drumstick-bite');

    const homeInfo = document.createElement('p');
    homeInfo.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    homeTitle.appendChild(homeSpan);

    home.appendChild(homeTitle);
    home.appendChild(homeIcon);

    titleCard.appendChild(home);
    titleCard.appendChild(homeInfo);

    const header = document.querySelector('.header');

    header.appendChild(titleCard);
}

export default renderHome;