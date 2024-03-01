const activateLink = (event) => {
  if (event.target.classList.contains("header__link")) {
    document.querySelectorAll(".header__link").forEach((link) => {
      link.classList.remove("active");
    });
    event.target.classList.add("active")
  }
};

const links = document.querySelectorAll(".header__link")
links.forEach((link) => {
  link.addEventListener("click", activateLink)
})