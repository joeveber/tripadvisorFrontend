
document.addEventListener("DOMContentLoaded", () => {
    console.log("Document chargé");
    const contactForm = document.querySelector("#contactForm");
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const data = {
            firstname: document.querySelector("#firstname").value,
            lastname: document.querySelector("#lastname").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value,
        }
        console.log(data); 
        const response = await axios.post("http://localhost:3000/",data);
        console.log(response);
        if (response.status !== 200) {
            alert("The form couldn't be send");
        } else {
            alert("The form has been sent");
        }
    });
});