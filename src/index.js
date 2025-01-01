import "./styles.css"
import {home_page} from "./homepage.js";
import {menu} from "./menu.js"
import {contact_info} from "./contact.js"
home_page();
let menu_button = document.getElementById("menu_button");
menu_button.addEventListener("click",()=>{
    menu();
});

let contact_button = document.getElementById("contact_button");
contact_button.addEventListener("click",()=>{
    contact_info();
});

let home_button = document.getElementById("home_button");
home_button.addEventListener("click",()=>{
    home_page();
});