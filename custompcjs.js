// <!--------------------------------------------------- SHOW MENU ---------------------------------------------------------->
const navMenu1 = document.getElementById('nav-menu1'),
      navToggle1 = document.getElementById('pc1'),
      navClose1 = document.getElementById('nav-close1'),

      navMenu2 = document.getElementById('nav-menu2'),
      navToggle2 = document.getElementById('pc2'),
      navClose2 = document.getElementById('nav-close2'),

      navMenu3 = document.getElementById('nav-menu3'),
      navToggle3 = document.getElementById('pc3'),
      navClose3 = document.getElementById('nav-close3'),

      navMenu4 = document.getElementById('nav-menu4'),
      navToggle4 = document.getElementById('pc4'),
      navClose4 = document.getElementById('nav-close4'),

      navMenu5 = document.getElementById('nav-menu5'),
      navToggle5 = document.getElementById('pc5'),
      navClose5 = document.getElementById('nav-close5'),

      navMenu6 = document.getElementById('nav-menu6'),
      navToggle6 = document.getElementById('pc6'),
      navClose6 = document.getElementById('nav-close6')




      

// <!-------------------------------------------------- PC-1 ---------------------------------------------------------->
/* Validate if constant exists - show menu */
if(navToggle1){
    navToggle1.addEventListener('click', () =>{
        navMenu1.classList.add('show-menu')
    })
}

/* Validate if constant exists - hide menu */
if(navClose1){
    navClose1.addEventListener('click', () =>{
        navMenu1.classList.remove('show-menu')
    })
}

// <!-------------------------------------------------- PC-2 ---------------------------------------------------------->
if(navToggle2){
    navToggle2.addEventListener('click', () =>{
        navMenu2.classList.add('show-menu')
    })
}

/* Validate if constant exists - hide menu */
if(navClose2){
    navClose2.addEventListener('click', () =>{
        navMenu2.classList.remove('show-menu')
    })
}


// <!-------------------------------------------------- PC-3 ---------------------------------------------------------->
if(navToggle3){
    navToggle3.addEventListener('click', () =>{
        navMenu3.classList.add('show-menu')
    })
}

/* Validate if constant exists - hide menu */
if(navClose3){
    navClose3.addEventListener('click', () =>{
        navMenu3.classList.remove('show-menu')
    })
}


// <!-------------------------------------------------- PC-4 ---------------------------------------------------------->
if(navToggle4){
    navToggle4.addEventListener('click', () =>{
        navMenu4.classList.add('show-menu')
    })
}

/* Validate if constant exists - hide menu */
if(navClose4){
    navClose4.addEventListener('click', () =>{
        navMenu4.classList.remove('show-menu')
    })
}

// <!-------------------------------------------------- PC-5 ---------------------------------------------------------->
if(navToggle5){
    navToggle5.addEventListener('click', () =>{
        navMenu5.classList.add('show-menu')
    })
}

/* Validate if constant exists - hide menu */
if(navClose5){
    navClose5.addEventListener('click', () =>{
        navMenu5.classList.remove('show-menu')
    })
}

// <!-------------------------------------------------- PC-6 ---------------------------------------------------------->
if(navToggle6){
    navToggle6.addEventListener('click', () =>{
        navMenu6.classList.add('show-menu')
    })
}

/* Validate if constant exists - hide menu */
if(navClose6){
    navClose6.addEventListener('click', () =>{
        navMenu6.classList.remove('show-menu')
    })
}

// <!-------------------------------------------------- MENU REMOVE ---------------------------------------------------------->
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

