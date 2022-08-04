import { renderTitleCard } from "./website";

const renderMenuTitle = () => {
    const titleCard = renderTitleCard();

    const menuCard = document.createElement('div');
    menuCard.classList.add('title');

    const MenuTitle = document.createElement('h1');
    MenuTitle.textContent = 'OUR '

    const MenuSpan = document.createElement('span');
    MenuSpan.textContent = 'MENU';

    const MenuInfo = document.createElement('p');
    MenuInfo.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius aliquet ullamcorper. Etiam in suscipit velit, at euismod erat. In cursus quam est, eu semper sem dapibus non. Vestibulum fringilla vel felis ac condimentum. Proin mollis, ipsum non commodo feugiat.';

    MenuTitle.appendChild(MenuSpan);
    menuCard.appendChild(MenuTitle);

    titleCard.appendChild(menuCard);
    titleCard.appendChild(MenuInfo);

    const header = document.querySelector('.header');

    header.appendChild(titleCard);
}

const renderMenuItems = () => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    menuContainer.appendChild(
               createMenuItem(
                   'Original',
                      '24.99',
               'Just a bucket of our beloved original chicken.'
               )
    );

    menuContainer.appendChild(
               createMenuItem(
                  'Peri-peri',
                      '14.99',
               'Our original chicken but with a kick of flavor.'
               )
    );

    menuContainer.appendChild(
               createMenuItem(
                    'Popcorn',
                       '9.99',
               'Our original chicken in a different form factor.'
               )
    );

    menuContainer.appendChild(
               createMenuItem(
                   'Variety',
                      '29.99',
               'A little bit of everything in one large bucket!'
               )
    );

    const main = document.querySelector('.main');

    main.appendChild(menuContainer);
}

const createMenuItem = (name, price, description) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const menuImg = document.createElement('img');
    menuImg.classList.add('menu-img');
    menuImg.src = `images/menu/${name.toLowerCase()}.png`;
    menuImg.alt = `${name}`;

    const menuInfo = document.createElement('div');
    menuInfo.classList.add('menu-info');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-title');

    const menuName = document.createElement('h3');
    const menuPrice = document.createElement('h3');

    menuName.textContent = `${name} Chicken:`;
    menuPrice.textContent = `$${price}`;

    menuTitle.appendChild(menuName);
    menuTitle.appendChild(menuPrice);

    const menuDescription = document.createElement('p');
    menuDescription.textContent = description;

    menuInfo.appendChild(menuTitle);
    menuInfo.appendChild(menuDescription);

    menuItem.appendChild(menuImg);
    menuItem.appendChild(menuInfo);

    return menuItem;
} 

export { renderMenuTitle, renderMenuItems };