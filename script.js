function openMenu(){
    var menu = document.getElementsByClassName('header-menu');
    var getStyle = menu[0].style.display;
    if(getStyle == '' || getStyle == 'none'){
        menu[0].style.display = 'block';
    }else{
        menu[0].style.display = 'none';
        
    }
}



var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,6000);

function nextSlide() {
 slides[currentSlide].className = 'slide';
 currentSlide = (currentSlide+1)%slides.length;
 slides[currentSlide].className = 'slide showing';
}

function openOrder(){
    var formElement = document.getElementsByClassName('form');
    formElement[0].style.display == '' || formElement[0].style.display == 'none' ?
    formElement[0].style.display = 'block' : formElement[0].style.display = 'none';
    } 












var colors = {
    0 : '#C13584',
    1 : '#333',
    2 : '#0077b5',
    3 : '#3b5998',
    4 : '#1da1f2',
    5 : '#00aff0',
    6 : '#45668e',
    7 : '#ff0000',
    8 : '#0088cc'
};
var elements = document.querySelectorAll('.footer-social > i');

for(let i = 0; i < elements.length; i++){
    elements[i].onmouseover = function(){
         document.getElementsByClassName('footer-decorate')[0].style.backgroundColor = colors[i];
         elements[i].style.color = colors[i];
    }
    elements[i].onmouseout = function(){
         document.getElementsByClassName('footer-decorate')[0].style.backgroundColor = '#222';
        elements[i].style.color = '';
    }
}


