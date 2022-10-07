   /*  CS412 Web App Development Project 6
    Portfolio for Mr.sc. Selma Haračić Berbić - Sponsored Project 
    Author - Edin Ziga 190302192
	Last edit - January 2nd, 2022

    */





//Scroll Bar
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}





  
//Code for backend, mail service

const contactForm = document.querySelector('contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

document.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let formInfo = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    };

    let xhr = new XMLHttpRequest();

    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = ''; 
        } else{
            alert('Email was not sent');
        }
    }

    xhr.send(JSON.stringify(formInfo));
}) 