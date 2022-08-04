const renderContact = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact-container');

    const timeDiv = document.createElement('div');
    const phoneDiv = document.createElement('div');
    const emailDiv = document.createElement('div');
    const form = document.createElement('form');

    const timeIcon = document.createElement('i');
    const timeText = document.createElement('h2');
    timeIcon.classList.add('fa-solid', 'fa-clock');
    timeText.textContent = ' - Mon-Sun: 10am - 10pm';
    timeDiv.appendChild(timeIcon);
    timeDiv.appendChild(timeText);

    const phoneIcon = document.createElement('i');
    const phoneText = document.createElement('h2');
    phoneIcon.classList.add('fa-solid', 'fa-phone');
    phoneText.textContent = ' - (343) 733-1561';
    phoneDiv.appendChild(phoneIcon);
    phoneDiv.appendChild(phoneText);

    const emailIcon = document.createElement('i');
    const emailText = document.createElement('h2');
    emailIcon.classList.add('fa-solid', 'fa-envelope');
    emailText.textContent = ' - info@chickenmanok.com';
    emailDiv.appendChild(emailIcon);
    emailDiv.appendChild(emailText);

    form.innerHTML = `<h3>Send us an email below and we will get back to you as soon as possible!</h3>
                     <input type='email' placeholder='E-mail'>
                     <textarea name='message' placeholder='Type your message...' id='message' cols='30' rows='10'></textarea>
                     <input type='button' value='SEND MESSAGE' id='contact-btn'>`;

    contact.appendChild(timeDiv);
    contact.appendChild(phoneDiv);
    contact.appendChild(emailDiv);
    contact.appendChild(form);

    const header = document.querySelector('.header');
    header.appendChild(contact);
}

const renderLocation = () => {
    const map = document.createElement('div');
    map.classList.add('map-container');

    map.innerHTML = `<iframe
                        width="600"
                        height="450"
                        style="border:0"
                        loading="lazy"
                        allowfullscreen
                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                        &q=Space+Needle,Seattle+WA">
                    </iframe>'`;

    const main = document.querySelector('.main');
    main.appendChild(map);
}

export { renderContact, renderLocation };