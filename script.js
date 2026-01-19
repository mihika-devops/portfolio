// Phase 1: Basic interactions (kept minimal intentionally)
console.log("Hero section loaded successfully 🚀");
// Simple fade-in on scroll for About section
const aboutSection = document.querySelector(".about");

window.addEventListener("scroll", () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 150;

    if (sectionTop < triggerPoint) {
        aboutSection.style.opacity = "1";
        aboutSection.style.transform = "translateY(0)";
    }
});

// Initial state
aboutSection.style.opacity = "0";
aboutSection.style.transform = "translateY(40px)";
aboutSection.style.transition = "all 0.8s ease";
// Fade-in animation for project cards
const projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (cardTop < trigger) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Initial state
projectCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
});
// Fade-in animation for skills cards
const skillCards = document.querySelectorAll(".skill-card");

window.addEventListener("scroll", () => {
    skillCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const trigger = window.innerHeight - 120;

        if (cardTop < trigger) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Initial state
skillCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
});
// Fade-in animation for certificate cards
const certificateCards = document.querySelectorAll(".certificate-card");

window.addEventListener("scroll", () => {
    certificateCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const trigger = window.innerHeight - 120;

        if (cardTop < trigger) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Initial state
certificateCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
});
// Fade-in animation for contact section
const contactSection = document.querySelector(".contact");

window.addEventListener("scroll", () => {
    const top = contactSection.getBoundingClientRect().top;
    const trigger = window.innerHeight - 120;

    if (top < trigger) {
        contactSection.style.opacity = "1";
        contactSection.style.transform = "translateY(0)";
    }
});

// Initial state
contactSection.style.opacity = "0";
contactSection.style.transform = "translateY(40px)";
contactSection.style.transition = "all 0.8s ease";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 1️⃣ Send email to YOU
    emailjs.sendForm(
        "service_au1ixca",        // your REAL service ID
        "template_wossgnd",       // main contact template
        this
    ).then(
        () => {
            // 2️⃣ Send AUTO-REPLY to sender
            emailjs.sendForm(
                "service_au1ixca",
                "template_g1maark",   // 👈 auto-reply template ID
                this
            );

            alert("Message sent successfully!");
            form.reset();
        },
        (error) => {
            console.error(error);
            alert("Failed to send message");
        }
    );
});

const words = [
    "Full Stack Developer",
    "AI Features & Applications",
    "DevOps Deployment"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const element = document.getElementById("typing");
    const currentWord = words[wordIndex];

    if (!deleting) {
        element.innerHTML = currentWord.substring(0, charIndex++);
        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        element.innerHTML = currentWord.substring(0, charIndex--);
        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 40 : 80);
}

window.onload = typeEffect;
