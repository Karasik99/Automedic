


let LEFTBTN = document.querySelector('.btn-left')
let RIGHTBTN = document.querySelector('.btn-right')
let BUTTONS = document.querySelector('.services__slader-arrows')
let CARDLINE = document.querySelector('.services__slader')
let SLADERCARDS = document.querySelectorAll('.services__slader-slade')
let BODY = document.querySelector('body')
let CROSS = document.querySelector('.form__cross')

const CARDWIDTH = 432
let OFFSET = 0
let INTERVAL = (SLADERCARDS.length*CARDWIDTH)-CARDWIDTH*2   




let FORM = document.querySelector('.form')
let MAINBTNS = document.querySelectorAll('.main__button') 
let BURGER = document.querySelector('.header__hamburger') 
let NAV = document.querySelector('.header__menu')


MAINBTNS.forEach((e)=>{
    e.addEventListener('click', OpenMenu)
})

BODY.addEventListener('click', HideMenu)
BODY.addEventListener('click', CloseMenu)
CROSS.addEventListener('click', CloseMenu)
BURGER.addEventListener('click', Burgermenu)
BUTTONS.addEventListener('click', Slader)




function CloseMenu(event){
    if(!event.target.closest('.main__button') && !event.target.closest('.form') || event.target.closest('.form__cross')){
        FORM.classList.remove('activeform')
    }
}


function OpenMenu(event){
    if(event.target.closest('.main__button')) {
         FORM.classList.toggle('activeform')
    }
}



function HideMenu(event){
    if(!event.target.closest('.header__hamburger')){
        NAV.classList.remove('active')
    }
}



function Burgermenu(event){
    if(event.target.closest('.header__hamburger')){
        NAV.classList.toggle('active')
    }

}


function Slader(event){
    if(event.target.closest('.btn-right')){
        OFFSET+=CARDWIDTH
        if(OFFSET>INTERVAL){
            OFFSET = 0
        }
        CARDLINE.style.transform = `translateX(${-OFFSET}px)`
        console.log(OFFSET)
    }
    if(event.target.closest('.btn-left')){
        OFFSET-=CARDWIDTH
        if(OFFSET<0){
            OFFSET = INTERVAL
        }
        CARDLINE.style.transform = `translateX(${-OFFSET}px)`
    }
    }



    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('element-show');
          }
        });
      }
      
      let options = {
        threshold: [0.5] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.element-animation');
      
      for (let elm of elements) {
        observer.observe(elm);
      }