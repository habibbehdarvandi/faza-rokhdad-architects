const menuBtn = document.querySelector('.toggle-menu');
const menu = document.querySelector('nav');
menuBtn.addEventListener('click' , ()=>{
    menu.classList.toggle('show')
})


const dropdownItems = document.querySelectorAll('#dropdowns .item');

dropdownItems.forEach(e => {
    e.addEventListener('click' , (e)=>{

        dropdownItems.forEach(e => {
            if( e.classList.contains('active') ){
                e.classList.toggle('active');
            }else{
                return;
            }
        });

        let item = e.target;
        if(!item.classList.contains('active')){
            item.classList.toggle('active')
        }else{
            return;
        }

    });
});