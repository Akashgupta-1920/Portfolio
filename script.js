const navMenu = document.getElementById("nav-menu");
const navTggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

//   show menu
if (navTggle) {
    navTggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}
//  Hide Menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}
// animation on 
var typed = new Typed('#element', {
    strings: ['Front-end Developer', 'Back-end developer' ,'Programmer'],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
  });
//  ==== Remove Menu Mobile ====
const navLinks = document.querySelectorAll(".nav-link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    // when we click on each nav link ,we remove show menu class
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

// Change background header

// ===== Testimonaial Swiper =====

var swiper = new Swiper(".testimonial-wrapper", {
    loop: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// SCROLL section


// PORTFOLIO item display

const filterContainer = document.querySelector(".portfolio-filter-inner"),
filterBtns = filterContainer.children;
totalFilterBtn = filterBtns.length,
portfolioItems = document.querySelectorAll(".portfolio-item")
totalPortfolioItem = portfolioItems.length;
console.log(totalPortfolioItem);


for(let i = 0; i < totalFilterBtn;i++){

filterBtns[i].addEventListener("click",function(){

filterContainer.querySelector(".active").classList.remove("active");
this.classList.add("active");
const filterValue = this.getAttribute("data-filter");
for(let k=0;k<totalPortfolioItem;k++){
    if(filterValue === portfolioItems[k].getAttribute("data-category")){
        portfolioItems[k].classList.add("show")
        portfolioItems[k].classList.remove("hide")
    }
    else{
        portfolioItems[k].classList.add("hide")
        portfolioItems[k].classList.remove("show")
    }
    if(filterValue === "all"){
        portfolioItems[k].classList.add("show")
        portfolioItems[k].classList.remove("hide")
    }
}
})
}



// THEME / DISPLAY

const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');
const root = document.querySelector(':root');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

const openThemeModal = () => {
    themeModal.style.display = "grid";
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = "none";
    }
}
theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);


// FONTS

// remove active class form span or font size
const removeSizeSeletor = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
//  add font size 
fontSizes.forEach(size => {
    size.addEventListener("click", () => {
        removeSizeSeletor();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '12px';
        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = '14px';
        }

        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
        }

        else if (size.classList.contains('font-size-4')) {
            fontSize = '18px';
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

// COLOR change
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPalette => {
        colorPalette.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        let primaryHue;
        changeActiveColorClass();
        if (color.classList.contains('choose-1')) {
            primaryHue = 252;
        }
        else if (color.classList.contains('choose-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('choose-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('choose-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('choose-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//   THEME change
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;
// Change Background Color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
Bg1.addEventListener('click', () => {
    // Add active Class
    Bg1.classList.add('active');
    // Remove active Class from others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    // Remove custmized change for local storage
    window.location.reload();
})
Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    lightColorLightness = '15%';
    whiteColorLightness = '20%';

    // Add active Class
    Bg2.classList.add('active');
    // Remove active Class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    lightColorLightness = '0%';
    whiteColorLightness = '10%';

    // Add active Class
    Bg3.classList.add('active');
    // Remove active Class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})