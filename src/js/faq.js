const titles = document.querySelectorAll(".accordion__title");
const contents = document.querySelectorAll(".accordion__content");
const header = document.querySelector("header");

let $ = document.querySelector.bind(document),
    $$ = document.querySelectorAll.bind(document),
    prop = $(".footer__address"),
    logoF = $(".footer__logo"),
    logoH = $(".header__logo"),
    descr = $(".footer__description"),
    menu = $(".header__menu-wrapper"),
    form = $(".header__form"),
    burger = $(".header__burger"),
    nav = $(".header__nav"),
    container = $(".header__container");

window.addEventListener("resize", chooseOptionResize);
chooseOptionResize();
function chooseOptionResize() {
    let iWidth = window.innerWidth;
    menuElementsReplace(iWidth);
}
function menuElementsReplace(iWidth) {
    if (iWidth < 768) descr.after(prop);
    if (iWidth >= 768) logoF.after(prop);
    if (iWidth >= 992) burger.after(form);
    if (iWidth < 992) logoH.after(form);
    if (iWidth < 1130) menu.prepend(logoH);
    if (iWidth >= 1130) {
        container.prepend(logoH);
        nav.after(form);
        closeMenu();
    }
}

$(".wrapper").addEventListener("click", chooseOptionClick);
function chooseOptionClick() {
    if (event.target.closest(".spoiler")) openSpoiler(event.target);
    if (event.target.closest(".header__burger")) openMenu();
    if (
        event.target.closest(".header__close") ||
        event.target.matches(".header__menu")
    )
        closeMenu();
}

function openMenu() {
    header.classList.add("_active");
    $(".header__menu").classList.add("active");
    $("body").classList.add("lock");
}
function closeMenu() {
    header.classList.remove("_active");
    $(".header__menu").classList.remove("active");
    $("body").classList.remove("lock");
}

titles.forEach((item) =>
    item.addEventListener("click", () => {
        const activeContent = document.querySelector("#" + item.dataset.tab);

        if (activeContent.classList.contains("_active")) {
            activeContent.classList.remove("_active");
            item.classList.remove("_active");
            activeContent.style.maxHeight = 0;
        } else {
            contents.forEach((element) => {
                element.classList.remove("_active");
                element.style.maxHeight = 0;
            });

            titles.forEach((element) => element.classList.remove("_active"));

            item.classList.add("_active");
            activeContent.classList.add("_active");
            activeContent.style.maxHeight = activeContent.scrollHeight + "px";
        }
    })
);

document.querySelector('[data-tab="tab-1"]').classList.add("_active");
document.querySelector("#tab-1").classList.add("_active");
document.querySelector("#tab-1").style.maxHeight =
    document.querySelector("#tab-1").scrollHeight + "px";
