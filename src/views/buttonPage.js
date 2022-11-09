import { MAIN  } from "../constants.js";
export const buttonPage = ()=>{
    const newDiv = document.createElement('div');
    const back = document.querySelector(".header_logo");
    back.innerHTML =  '<a href="index.html" class="home">Back Home Page click here </a>';
    MAIN.innerHTML = '';
    MAIN.appendChild(newDiv)
}