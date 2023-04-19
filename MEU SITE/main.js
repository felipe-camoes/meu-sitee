const textPresentation = document.querySelector(".text").textContent;
const projetos = document.querySelector(".project")
let i = 0;

function showText() {
    const presentation = document.querySelector(".layer-presentation");
    projetos.style.display = "none"
    presentation.innerHTML += textPresentation[i];
    i++;
    if (textPresentation[i] === undefined) {
        clearInterval(intervalId);
        projetos.style.display = "block"
        projetos.style.animation = "entrance"
        projetos.style.animationDuration = "2s"
      
        
    }

  

}


const intervalId = setInterval(showText, 6);


