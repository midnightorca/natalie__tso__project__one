// get the ul element in the header nav
const navElement = document.querySelector('ul')

const burgerElement = document.querySelector('button')

burgerElement.addEventListener('click', function(){

    navElement.classList.toggle('burger__nav');

    if (event.target.tagName === 'I'){
        changeIcon(event.target);
    }
})



function changeIcon(icon){
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}