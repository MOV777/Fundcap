const mobile__burger = document.querySelector(".mobile__burger");
const mobile__menu = document.querySelector(".mobile__menu");
const close = document.querySelector(".mobile__burger-close");

mobile__burger.onclick = () => {
    mobile__menu.classList.add("open");
}

close.onclick = () => {
    mobile__menu.classList.remove("open");
}
