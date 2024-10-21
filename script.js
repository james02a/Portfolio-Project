{
    //enable hidden nav bar

    const nav = document.querySelector(".nav");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY){
        nav.classList.add("nav--hidden");
        } else{
            nav.classList.remove("nav--hidden");

        }
        lastScrollY = window.scrollY;
    });

}

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

const toggleSwitch = document.querySelector('.dark-mode input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// this is for  scroller

const scrollers = document.querySelectorAll(".scroller");
if(!window.matchMedia("(prefers-reduced-motion)").matches){
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller )=>{
    scroller.setAttribute("data-animated",true);

    const scrollerInner = scroller.querySelector('.scroller__inner');
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
      
    });

  });
}

function toggleMenu(){
    const menu =document.querySelector(".menu-links");
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")


}

{


const nav = document.querySelector(".hamburger-menu");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY){
    nav.classList.add("nav--hidden");
    } else{
        nav.classList.remove("nav--hidden");

    }
    lastScrollY = window.scrollY;
});

}
