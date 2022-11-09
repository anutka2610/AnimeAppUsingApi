import { getData } from "./src/pages/fetchData.js";
import { createWelcomeElement } from "./src/views/welcome.js";
import { MAIN  } from "./src/constants.js";
import { URL } from "./src/constants.js";

const initButton = ()=>{
    getData(createAnimeButton)}

  const initWelcomePage = () => {

    const welcomeElement = createWelcomeElement();
    MAIN.appendChild(welcomeElement);
    
    document
    .getElementById('startButton')
    .addEventListener('click', initButton);
  };

  initWelcomePage();

  const  createAnimeButton = (data) => {
    const newDiv = document.createElement('div');
    const back = document.querySelector(".header_logo");
    back.innerHTML =  '<a href="index.html" class="home">Back Home Page click here </a>';
    MAIN.innerHTML = '<p>If you want to see intresting facts about our favorite anime and anime picture, click on button<p>';
    MAIN.appendChild(newDiv)
     data?.forEach(element => {
        const button = document.createElement("button")
        button.setAttribute('type', "button")
        button.setAttribute('id', "element.anime_img")
        button.classList.add('animeButton')  
        button.innerHTML = element.anime_name
        newDiv.appendChild(button);

    button.addEventListener('click', ()=>initPicture(element.anime_name))
    });
}

const imgElement = document.querySelector(".pictures")
  
async function initPicture (anime_name){
const resp = await fetch(URL + anime_name);
const respData = await resp.json();

    imgElement.classList.add("picture_show")
    imgElement.innerHTML = `
    <div class="picture_card">
        <img class="picture_backdrop" src="${respData.img}" alt="${anime_name}">
        <h1>
            Facts about ${anime_name}
        </h2>
        <ul class="anime_facts"> ${respData.data.map(element => `<li>${element.fact}</li>`)}</ul>

        <button type="button" class="picture_button_close"> Close </button>
    </div>
    `
    const btnClose = document.querySelector(".picture_button_close");
    btnClose.addEventListener("click", () => clousePicture())
}

function clousePicture(){
imgElement.classList.remove("picture_show");
}
window.addEventListener("click", (e) => {
  if(e.target === imgElement) {
      clousePicture()
  }
})
window.addEventListener("keydown", (e)=>{
  if (e.keyCode===27){
      clousePicture()
  }
}
)