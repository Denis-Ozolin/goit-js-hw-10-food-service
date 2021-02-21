import './styles.css';

const bodyRef = document.querySelector('body');

bodyRef.classList.add('light-theme');

const checkboxRef = document.querySelector('#theme-switch-toggle');

checkbox.addEventListener('change', () => {
  bodyRef.classList.add('dark-theme');
});
  

