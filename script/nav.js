const header = document.getElementById("mainHeader");
let ultimaRolagemn = 0;

//Efeito do header
window.addEventListener("scroll", () => {
    const currentRolagem = window.scrollY;

    if (currentRolagem <= 0) {
        // Mantem o header visivel
        header.classList.remove("hide");
        return;
    }

    if (currentRolagem > ultimaRolagemn && !header.classList.contains("hide")) {
        // Rolar para baixo, esconde o header
        header.classList.add("hide");
    } else if (currentRolagem < ultimaRolagemn && header.classList.contains("hide")) {
       // Rolar para cima, mostra o header
        header.classList.remove("hide");
    }

    ultimaRolagemn = currentRolagem;
});