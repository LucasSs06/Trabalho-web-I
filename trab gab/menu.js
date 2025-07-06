// menu.js

document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;

      // Alternar classe "active" no botão
      this.classList.toggle("active");

      // Alternar classe "active" no conteúdo
      content.classList.toggle("active");

      // Fechar os outros conteúdos
      accordionButtons.forEach((otherButton) => {
        if (otherButton !== this) {
          otherButton.classList.remove("active");
          otherButton.nextElementSibling.classList.remove("active");
        }
      });
    });
  });
});
