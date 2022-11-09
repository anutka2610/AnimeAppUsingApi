export const createWelcomeElement = () => {
    const element = document.createElement('div');
    element.innerHTML = `
      <h1 class="welcome"> Hello! </h1>
      <p> Traditionally, the animations were drawn by hand, but today the majority is produced using digital animation techniques . Anime is used in television series , movies , videos , computer games , advertising , and Internet publishing ( ONA ) and represents most, if not all, genres of fiction . The themes within anime are often aimed at an older audience. </p>
      <button id="startButton">See animes click this button</button>
    `;
    return element;
  };