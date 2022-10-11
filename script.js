const navOpenBtn = document.getElementById("open-nav-btn")
const allNavItems = document.querySelectorAll(".nav__item")


navOpenBtn.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
})

allNavItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
        document.body.classList.remove("nav-open")
    })
})
