const header = document.querySelector("header");
const body = document.body;

function closeNav(){
    header.classList.toggle('close');
    if(header.classList.contains('close')){
        body.style.paddingTop = '0';
    }else{
        body.style.paddingTop = '250px';
    }
}

function updateHeader(){
    const screenWidth = window.innerWidth;
    if(screenWidth > 900){
        body.style.paddingTop = '50px';
    }
    if(screenWidth <= 900){
        if(header.classList.contains('close')){
            body.style.paddingTop = '0px';
        }
        else{
            body.style.paddingTop = '250px';
        }
        
    }
}

updateHeader();
window.addEventListener('resize', updateHeader);



function retrieveUsername(){
    let usernameInput = document.getElementById("usernameInput");
    let myName = usernameInput.value;
    if(myName != ""){
        document.querySelector('.username').innerHTML = myName;
        const welcomeText = document.querySelector(".welcome");
        welcomeText.classList.add("show");
    }
}

function retrieveMessage(){
    
    let nameInput = document.getElementById("nameInput"),
        emailInput = document.getElementById("emailInput"),
        pNumberInput = document.getElementById("pNumberInput"),
        messageInput = document.getElementById("messageInput");
        
    let name = nameInput.value;
    
    let email = emailInput.value;
   
    let pNumber = pNumberInput.value;
    
    let message = messageInput.value;
    
    

    if(name != "" && email != "" && pNumber != "" && message != ""){
        const dateString = new Date().toString();
        const parts = dateString.split('(');
        const dateWithoutTimeZone = parts[0].trim();
        // form is inputted correctly
        document.querySelector('.date').innerHTML = dateWithoutTimeZone;
        document.querySelector('.name').innerHTML = name;
        document.querySelector('.email').innerHTML = email;
        document.querySelector('.pNumber').innerHTML = pNumber;
        document.querySelector('.msg').innerHTML = message;

        const inquiries = document.querySelector('.inquiries');
        inquiries.classList.add("show");
    }
}

var form = document.querySelector('.form-nm');
var formInquiries = document.querySelector('.form-inquiries');
function handleForm(event){
    event.preventDefault();
    form.reset();
    formInquiries.reset();
}
form.addEventListener('submit', handleForm);
formInquiries.addEventListener('submit', handleForm);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("autoSlide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}