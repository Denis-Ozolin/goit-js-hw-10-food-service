import './styles.css';
import menuMarkup from './templating.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const {LIGHT, DARK} = Theme;

const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');
const menuRef = document.querySelector('ul.js-menu');

menuRef.insertAdjacentHTML("beforeend", menuMarkup);

const darkThemeLS = JSON.stringify(DARK);
const lightThemeLS = JSON.stringify(LIGHT);
const currentThemeLS = JSON.parse(localStorage.getItem('theme'));
console.log(currentThemeLS);


bodyRef.classList.add(currentThemeLS);


checkboxRef.addEventListener('change', (event) => {
  event.preventDefault();

  bodyRef.classList.toggle(LIGHT);
  bodyRef.classList.toggle(DARK);

  if(bodyRef.classList.contains(DARK)){
    localStorage.setItem('theme', darkThemeLS);  
  } else {
    localStorage.setItem('theme', lightThemeLS);
  }
});


