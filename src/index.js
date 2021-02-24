import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');
const menuRef = document.querySelector('ul.js-menu');

// menuRef.insertAdjacentHTML('beforeend', string);
const localTStorageTheme = localStorage.getItem('theme');
const theme = JSON.parse(localTStorageTheme);
bodyRef.classList.toggle(theme);

const localCheckValue = localStorage.getItem('checked');
const checkValue = JSON.parse(localCheckValue);

checkboxRef.value = checkValue;

checkboxRef.addEventListener('change', () => {
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);

  if(bodyRef.classList.contains(Theme.DARK)){
    checkboxRef.value = true;

    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
    localStorage.setItem('checked', JSON.stringify(checkboxRef.value));

    
  } else {
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
    localStorage.setItem('checked', JSON.stringify(!checkboxRef.value));

  }
});
  


