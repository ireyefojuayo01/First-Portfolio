// const logo = document.querySelector(".logo");
// console.log(logo);

// const projectsBtn = document.querySelector(".btn-primary");
// projectsBtn.addEventListener("click", function(){
//     console.log("Let's go check out the projects!")
// })

// LIGHT AND DARK MODE TOGGLE
const themeBtn = document.querySelector(".icon-btn");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";
}
themeBtn.addEventListener("click", function() {
document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme","light"
    )
}
else{
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme","dark"
    )
}
});

//HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("active")

    if(navLinks.classList.contains("active")){
        hamburger.innerHTML = "<i class='fa-solid fa-xmark'></i>"
    }
    else{
        hamburger.innerHTML = "<i class='fa-solid fa-bars'><i/> "
    }

});

//CONTACT FORM
const contactForm = document.querySelector(".contact-form");

const nameInput = document.querySelector('input[placeholder="Your Name"]');
const emailInput = document.querySelector('input[placeholder="Your Email"]');
const messageInput = document.querySelector('textarea');

const nameError = document.querySelector(".input-group:nth-child(1) .error-msg");
const emailError = document.querySelector(".input-group:nth-child(2) .error-msg");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let isvalid = true;

    if(nameInput.value === ""){
        nameError.textContent = "Please enter your name";
        nameInput.classList.add("input-error");
        isValid = false;
    }else{
        nameError.textContent = "";
        nameInput.classList.remove("input-error");
    }

        if(emailInput.value === ""){
        emailError.textContent = "Please enter your email";
        emailInput.classList.add("input-error");
        isValid = false;
    }else{
        emailError.textContent = "";
        emailInput.classList.remove("input-error");
    }

    if(!isValid) {
        return;
    }
    console.log("Form is valid, ready to send!")
});

//SECTIONS
const sections = document.querySelectorAll("section[id]");
const navLinksAll = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function(){
    let current = "";

    sections.forEach(function(section){
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200){
            current = section.getAttribute("id");
        }
    });

    navLinksAll.forEach(function(link){
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});





    
