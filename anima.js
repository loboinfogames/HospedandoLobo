document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("header h1");
    const imagem = document.querySelector("main img");

    // Animação de fade-in no título
    titulo.style.opacity = 0;
    titulo.style.transition = "opacity 2s ease-in";
    setTimeout(() => {
        titulo.style.opacity = 1;
    }, 100);

    // Animação de "pulsar" na imagem
    imagem.style.transition = "transform 0.3s ease-in-out";
    let growing = true;
    setInterval(() => {
        imagem.style.transform = growing ? "scale(1.05)" : "scale(1)";
        growing = !growing;
    }, 500);
});
