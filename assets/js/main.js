document.addEventListener("DOMContentLoaded", () => {
    console.log("Document chargé");
    const contactForm = document.querySelector("#contactForm");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = {
            firstname: document.querySelector("#firstname").value,
            lastname: document.querySelector("#lastname").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#description").value,
        }
        console.log(data);
    });
});