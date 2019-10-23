//var adressDoc   = document.getElementsByClassName('adress')[0],
//    worktimeDoc = document.getElementsByClassName('worktime')[0],
//    contactsDoc = document.getElementsByClassName('contacts')[0];
//
//var newP = document.createElement('p');
//adressDoc.append(newP);
//newP.innerHTML = data.adress;
//
//var newP = document.createElement('p');
//worktimeDoc.append(newP);
//worktimeDoc.innerHTML = data.worktime;
//
//var newP = document.createElement('p');
//contactsDoc.append(newP);
//contactsDoc.innerHTML = data.contacts;

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