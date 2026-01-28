document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".copy-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const code = button.nextElementSibling.innerText;

      navigator.clipboard.writeText(code).then(() => {
        button.textContent = "Copié !";
        setTimeout(() => button.textContent = "Copier", 1500);
      });
    });
  });
});
