/* =========================================
   PORTFOLIO JAVASCRIPT
   Muhammad Saad Rauf Portfolio
========================================= */

// ==============================
// Loader
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1000);

});

// ==============================
// Typed Text
// ==============================

new Typed("#typing", {

    strings: [

        "Software Engineer",

        "Frontend Developer",

        "Android Developer",

        "Web Developer"

    ],

    typeSpeed: 80,

    backSpeed: 50,

    backDelay: 1500,

    loop: true

});

// ==============================
// AOS Animation
// ==============================

AOS.init({

    duration: 1000,

    once: true,

    offset: 100

});

// ==============================
// Theme Toggle
// ==============================

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

// ==============================
// Navbar Shadow
// ==============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.25)";

    }

    else{

        header.style.boxShadow="none";

    }

});

// ==============================
// Mobile Menu
// ==============================

const menuBtn=document.querySelector(".menu-btn");

const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("show");

});

// ==============================
// Close Menu
// ==============================

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("show");

});

});

// ==============================
// Active Navbar Link
// ==============================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ==============================
// Scroll Progress Bar
// ==============================

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const width=(scrollTop/height)*100;

progress.style.width=width+"%";

});

// ==============================
// Scroll To Top Button
// ==============================

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// ======================================
// CONTACT FORM - FORMSUBMIT AJAX
// ======================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const button = contactForm.querySelector("button");

        const originalButtonText = button.innerHTML;

        // Show sending state
        button.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        button.disabled = true;


        const formData = new FormData(contactForm);


        try {

            const response = await fetch(
                "https://formsubmit.co/ajax/muhammadsaadrauf2003@gmail.com",
                {
                    method: "POST",

                    headers: {
                        "Accept": "application/json"
                    },

                    body: formData
                }
            );


            const data = await response.json();


            if (response.ok && data.success) {

                // Success message
                formMessage.innerHTML = `
                    <div class="success-message">
                        <i class="fa-solid fa-circle-check"></i>

                        <div>
                            <strong>Message Sent Successfully!</strong>

                            <p>
                                Thank you for contacting me.
                                I'll get back to you soon.
                            </p>
                        </div>
                    </div>
                `;


                // Clear form
                contactForm.reset();


                // Restore button
                button.innerHTML =
                    '<i class="fa-solid fa-check"></i> Message Sent';


                // After 5 seconds restore button
                setTimeout(() => {

                    button.innerHTML = originalButtonText;

                    button.disabled = false;

                }, 5000);


            } else {

                throw new Error("Message could not be sent.");

            }


        } catch (error) {

            formMessage.innerHTML = `
                <div class="error-message">
                    <i class="fa-solid fa-circle-exclamation"></i>

                    <div>
                        <strong>Unable to Send Message</strong>

                        <p>
                            Please try again in a few moments.
                        </p>
                    </div>
                </div>
            `;


            button.innerHTML = originalButtonText;

            button.disabled = false;

        }

    });

}
// ==============================
// Fade Cards
// ==============================

const cards=document.querySelectorAll(

".skill-card,.service-card,.project-card,.education-card,.certificate-card,.stat-card"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".8s";

observer.observe(card);

});

// ==============================
// Cursor Glow
// ==============================

const glow=document.createElement("div");

glow.id="cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// ==============================
// Console Message
// ==============================

console.log("%cPortfolio Developed by Muhammad Saad Rauf 🚀",
"color:#00e5ff;font-size:20px;font-weight:bold;");
