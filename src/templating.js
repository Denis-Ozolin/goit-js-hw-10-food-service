import menuTemplate from './menu-template.hbs';
import menuList from './menu.json';

const menuMarkup = menuTemplate(menuList);

export default menuMarkup;
