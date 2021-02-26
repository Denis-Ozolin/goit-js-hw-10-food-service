import './styles.css';
import menuMarkup from './templating.js';
import theme from './theme';

const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');
const menuRef = document.querySelector('ul.js-menu');

const darkThemeLS = JSON.stringify(theme.DARK);
const lightThemeLS = JSON.stringify(theme.LIGHT);
const currentThemeLS = localStorage.getItem('theme');

function onCurrentThemeBody(){
  bodyRef.classList.add(JSON.parse(currentThemeLS));
    if(currentThemeLS === darkThemeLS){
      checkboxRef.checked = true;
    }
}

function onSwitchThemeBody(event){
  event.preventDefault();

  bodyRef.classList.toggle(theme.LIGHT);
  bodyRef.classList.toggle(theme.DARK);

  if(bodyRef.classList.contains(theme.DARK)){
    localStorage.setItem('theme', darkThemeLS);  
  } else {
    localStorage.setItem('theme', lightThemeLS);
  }
}

menuRef.insertAdjacentHTML("beforeend", menuMarkup);
onCurrentThemeBody();
checkboxRef.addEventListener('change', onSwitchThemeBody);


