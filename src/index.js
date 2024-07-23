import './style.css';
import './images/butter-chicken-ac2ff98.jpg';
import './images/biriyani.jpg';
import './images/rasmali.jpg';
import { displayMenu } from './displayMenu';
import { displayHome } from './displayHome';
import { displayContact } from './displayContact';

function clear(){
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

const Home = document.querySelector('#home');
Home.addEventListener('click', ()=>{
    clear();
    displayHome();
})

const Menu = document.querySelector('#Menu');
Menu.addEventListener('click', ()=>{
    clear();
    displayMenu();
})

const Contact = document.querySelector('#Contact');
Contact.addEventListener('click', ()=>{
    clear();
    displayContact();
})

displayHome();