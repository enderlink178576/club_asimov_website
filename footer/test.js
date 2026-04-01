document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menuList = document.getElementById("menu-list");

  if (!toggle || !menuList) return;

  toggle.addEventListener("click", () => {
    menuList.classList.toggle("show");
  });

  menuList.addEventListener("click", (event) => {
    if (event.target.tagName === "A" && window.innerWidth <= 768) {
      menuList.classList.remove("show");
    }
  });
});
