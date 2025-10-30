


let LEFTBTN = document.querySelector('.btn-left')
let RIGHTBTN = document.querySelector('.btn-right')
let BUTTONS = document.querySelector('.services__slader-arrows')
let CARDLINE = document.querySelector('.services__slader')
let SLADERCARDS = document.querySelectorAll('.services__slader-slade')
let BODY = document.querySelector('body')
let CROSS = document.querySelector('.form__cross')

let FORMBTN = document.querySelector('.form__data-btn')

let FORM = document.querySelector('.form')
let FormDatas = document.querySelector('.form__data')
let MAINBTNS = document.querySelectorAll('.main__button') 
let BURGER = document.querySelector('.header__hamburger') 
let NAV = document.querySelector('.header__menu')

const CARDWIDTH = 432
let OFFSET = 0
let INTERVAL = (SLADERCARDS.length*CARDWIDTH)-CARDWIDTH   
let GREATBTN = document.querySelector('.great__cross')
let GREATFORM = document.querySelector('.great')






MAINBTNS.forEach((e)=>{
    e.addEventListener('click', OpenMenu)
})



BODY.addEventListener('click', HideMenu)
BODY.addEventListener('click', CloseMenu)
CROSS.addEventListener('click', CloseMenu)
GREATBTN.addEventListener('click', Сlosegreat)
// BURGER.addEventListener('click', Burgermenu)
// BUTTONS.addEventListener('click', Slader)
FORM.addEventListener('submit',((event)=>{Submit(event)}))

document.addEventListener('submit',((event)=>{Opengreat(event)}))



// function Slader(event){
//     if(event.target.closest('.btn-right')){
//         OFFSET+=CARDWIDTH
//         if(OFFSET>INTERVAL){
//             OFFSET = 0
//         }
//         CARDLINE.style.transform = `translateX(${-OFFSET}px)`
//         console.log(OFFSET)
//     }
//     if(event.target.closest('.btn-left')){
//         OFFSET-=CARDWIDTH
//         if(OFFSET<0){
//             OFFSET = INTERVAL
//         }
//         CARDLINE.style.transform = `translateX(${-OFFSET}px)`
//     }
//     }


    function Opengreat(){
        FORM.classList.remove('activeform')
        GREATFORM.classList.add('activegreat')
    }

    function Сlosegreat(event){
        if(event.target.closest('.great__cross')){
            GREATFORM.classList.remove('activegreat')
        }
    }


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



  

      
      
      function Submit(event){
        event.preventDefault()
        let formdata = new FormData(event.target)
        Object.fromEntries(formdata)
        event.target.reset()
        let obj ={}
        for (var pair of formdata.entries()) {
            obj[pair[0]] = pair[1]
        }
        sendMessageTelegram(obj)
      }
      
      

      
      async function sendMessageTelegram(obj){
          const token =  "6536032829:AAGJt84Fx5iABijzDdj9YoF7kYsICDFp0AU"
          const chat_id = '-1002115025266'
          let text = `
          Новая заявка с сайта Automedic %0A
          Имя клиента: ${obj.name} %0A
          Номер клиента: ${obj.tel} %0A
          `
      
          const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}/` 
      
          let api = new XMLHttpRequest();
          api.open("GET",url,'true');
          api.send()
      }
      










    // const slider = document.querySelector('.slider');
    // const range = document.querySelector('.slider__range-js');
      
    // range.addEventListener('input', () => {
    //     slider.style.setProperty('--value', range.value + '%');
    // });






    function hello(){
        let x = document.querySelectorAll('.slider')
        let y = document.querySelectorAll('.slider__range-js')

        y.forEach((element)=>{
            element.addEventListener('input', () =>{
                x.forEach((elem)=>{
                    elem.style.setProperty('--value', element.value + '%');
                })
            })
        })




    }


hello()




