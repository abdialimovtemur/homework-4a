const drower_btn = document.querySelector('.open__modal')
const drower = document.querySelector('.drower__dr')
const drower__content = document.querySelector('.drower__content')
const drower__close = document.querySelector('.drower__close')
const close__button = document.querySelector('.close__button')
const modal__btn = document.querySelector('.open__modal2')
const modal__content = document.querySelector('.modal__content')

const removeDrover = () => {
    drower__content.classList.remove("open");
    drower.classList.remove("show");
}; 

drower_btn.addEventListener('click',()=>{
    drower__content.classList.toggle("open");
    drower.classList.add("show");
});


drower.addEventListener("click", removeDrover);
drower__close.addEventListener("click", removeDrover);


// modal uchun



modal__btn.addEventListener('click' ,()=> {
    modal__content.style.opacity = "1";
})

close__button.addEventListener('click', ()=>{
    modal__content.style.opacity = "0";

})

