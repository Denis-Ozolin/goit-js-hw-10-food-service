import menuTemplate from './menu-template.hbs';
import menuList from './menu.json';
console.log(menuTemplate);


const menuMarkup = menuTemplate(menuList)
const menuRef = document.querySelector('ul.js-menu');

menuRef.insertAdjacentHTML("beforeend", menuMarkup);
