(()=>{"use strict";const e=document.querySelector("#content"),t=()=>{const e=document.createElement("div");return e.classList.add("titleCard"),e},n=()=>{const e=t(),n=document.createElement("div");n.classList.add("title");const a=document.createElement("h1");a.textContent="CHICKEN";const d=document.createElement("span");d.textContent="MANOK";const i=document.createElement("i");i.classList.add("fa-solid","fa-drumstick-bite");const c=document.createElement("p");c.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",a.appendChild(d),n.appendChild(a),n.appendChild(i),e.appendChild(n),e.appendChild(c),document.querySelector(".header").appendChild(e)},a=(e,t,n)=>{const a=document.createElement("div");a.classList.add("menu-item");const d=document.createElement("img");d.classList.add("menu-img"),d.src=`images/menu/${e.toLowerCase()}.png`,d.alt=`${e}`;const i=document.createElement("div");i.classList.add("menu-info");const c=document.createElement("div");c.classList.add("menu-title");const o=document.createElement("h3"),l=document.createElement("h3");o.textContent=`${e} Chicken:`,l.textContent=`$${t}`,c.appendChild(o),c.appendChild(l);const s=document.createElement("p");return s.textContent=n,i.appendChild(c),i.appendChild(s),a.appendChild(d),a.appendChild(i),a};(()=>{(()=>{const t=document.createElement("header");t.classList.add("header");const n=document.createElement("nav");n.classList.add("nav");const a=document.createElement("button"),d=document.createElement("button"),i=document.createElement("button");a.classList.add("nav-btn"),d.classList.add("nav-btn"),i.classList.add("nav-btn"),a.setAttribute("id","home"),d.setAttribute("id","menu"),i.setAttribute("id","contact"),a.textContent="HOME",d.textContent="MENU",i.textContent="CONTACT",n.appendChild(a),n.appendChild(d),n.appendChild(i),t.appendChild(n),e.appendChild(t)})(),(()=>{const t=document.createElement("main");t.classList.add("main"),e.appendChild(t)})(),(()=>{const t=document.createElement("footer");t.classList.add("footer");const n=document.createElement("p");n.textContent="Made by kmatic";const a=document.createElement("a");a.href="https://github.com/kmatic/",a.target="_blank";const d=document.createElement("i");d.classList.add("fa-brands","fa-github"),a.appendChild(d),t.appendChild(n),t.appendChild(a),e.appendChild(t)})(),n();const d=document.querySelector(".header"),i=document.querySelector(".main"),c=document.querySelector("#home"),o=document.querySelector("#menu"),l=document.querySelector("#contact");c.addEventListener("click",(()=>{i.textContent="",d.removeChild(d.lastElementChild),n()})),o.addEventListener("click",(()=>{i.textContent="",d.removeChild(d.lastElementChild),(()=>{const e=document.createElement("div");e.classList.add("menu-container"),e.appendChild(a("Original","24.99","Just a bucket of our beloved original chicken.")),e.appendChild(a("Peri-peri","14.99","Our original chicken but with a kick of flavor.")),e.appendChild(a("Popcorn","9.99","Our original chicken in a different form factor.")),e.appendChild(a("Variety","29.99","A little bit of everything in one large bucket!")),document.querySelector(".main").appendChild(e)})(),(()=>{const e=t(),n=document.createElement("div");n.classList.add("title");const a=document.createElement("h1");a.textContent="OUR ";const d=document.createElement("span");d.textContent="MENU";const i=document.createElement("p");i.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius aliquet ullamcorper. Etiam in suscipit velit, at euismod erat. In cursus quam est, eu semper sem dapibus non. Vestibulum fringilla vel felis ac condimentum. Proin mollis, ipsum non commodo feugiat.",a.appendChild(d),n.appendChild(a),e.appendChild(n),e.appendChild(i),document.querySelector(".header").appendChild(e)})()})),l.addEventListener("click",(()=>{i.textContent="",d.removeChild(d.lastElementChild),(()=>{const e=document.createElement("div");e.classList.add("contact-container");const t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),d=document.createElement("form"),i=document.createElement("i"),c=document.createElement("h2");i.classList.add("fa-solid","fa-clock"),c.textContent=" - Mon-Sun: 10am - 10pm",t.appendChild(i),t.appendChild(c);const o=document.createElement("i"),l=document.createElement("h2");o.classList.add("fa-solid","fa-phone"),l.textContent=" - (343) 733-1561",n.appendChild(o),n.appendChild(l);const s=document.createElement("i"),m=document.createElement("h2");s.classList.add("fa-solid","fa-envelope"),m.textContent=" - info@chickenmanok.com",a.appendChild(s),a.appendChild(m),d.innerHTML="<h3>Send us an email below and we will get back to you as soon as possible!</h3>\n                     <input type='email' placeholder='E-mail'>\n                     <textarea name='message' placeholder='Type your message...' id='message' cols='30' rows='10'></textarea>\n                     <input type='button' value='SEND MESSAGE' id='contact-btn'>",e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(d),document.querySelector(".header").appendChild(e)})(),(()=>{const e=document.createElement("div");e.classList.add("map-container"),e.innerHTML='<iframe\n                        width="600"\n                        height="450"\n                        style="border:0"\n                        loading="lazy"\n                        allowfullscreen\n                        referrerpolicy="no-referrer-when-downgrade"\n                        src="https://www.google.com/maps/embed/v1/place?key=API_KEY\n                        &q=Space+Needle,Seattle+WA">\n                    </iframe>\'',document.querySelector(".main").appendChild(e)})()}))})()})();