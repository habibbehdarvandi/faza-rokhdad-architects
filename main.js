const menuBtn = document.querySelector('.toggle-menu');
const menu = document.querySelector('nav');
menuBtn.addEventListener('click' , ()=>{
    menu.classList.toggle('show')
})
