import './styles.css';
import menuMarkup from './templating.js';
import theme from './theme';

const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');
const menuRef = document.querySelector('ul.js-menu');
const currentTheme = localStorage.getItem('theme') || theme.LIGHT;

function onCurrentThemeBody(){
  bodyRef.classList.add(currentTheme);
    if(currentTheme === theme.DARK){
      checkboxRef.checked = true;
    }
}

function onSwitchThemeBody(){
  bodyRef.classList.toggle(theme.LIGHT);
  bodyRef.classList.toggle(theme.DARK);

  if(bodyRef.classList.contains(theme.DARK)){
    localStorage.setItem('theme', theme.DARK);  
  } else {
    localStorage.setItem('theme', theme.LIGHT);
  }
}

menuRef.insertAdjacentHTML("beforeend", menuMarkup);
onCurrentThemeBody();
checkboxRef.addEventListener('change', onSwitchThemeBody);


