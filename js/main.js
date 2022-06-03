let menu_btn = document.querySelector("div.menu_btn")
let menu_btn_bar = document.querySelector("span.menu_btn_burger")
let nav = document.getElementById("nav")
let menu_nav = document.getElementById("menu_nav")




menu_btn.addEventListener("click", (e) => {
    menu_btn_bar.classList.toggle("open")
    nav.classList.toggle("open")
    menu_nav.classList.toggle("open")
    for (let child of menu_nav.children) {
        child.classList.toggle("open")
    }
})