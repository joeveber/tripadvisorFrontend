document.addEventListener("DOMContentLoaded", () => {
    console.log("Document chargé");


/// - hide modal
    const modalContent = document.querySelector(".modal");
    const formModalContent = document.querySelector(".form-container");
    const modalButton = document.querySelector("#signinbutton");
    const closemodal = document.querySelector("#closemodal");
  
    modalButton.addEventListener("click", (event) => {
      event.preventDefault();
      modalContent.classList.remove("hidden");
    });
    closemodal.addEventListener("click", () => {
      modalContent.classList.add("hidden");
    });
    formModalContent.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    });
/// -- Send email

    const contactForm = document.querySelector("#contactForm");
    const button = document.querySelector("button")
    const h4 = document.querySelector("h4")

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        button.setAttribute("disabled", "disabled");
        button.classList.add("btn-disabled");

        const data = {
            firstname: document.querySelector("#firstname").value,
            lastname: document.querySelector("#lastname").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value,
        }
        console.log(data); 
        const response = await axios.post("https://tripadvisor-form.herokuapp.com/",data);
        console.log(response);
        if (response.status !== 200) {
            alert("The form couldn't be send");
            button.removeAttribute("disabled");
            button.classList.remove("btn-disabled");
        } else {
            alert("The form has been sent");
            button.removeAttribute("disabled");
            button.classList.remove("btn-disabled");
            h4.classList.remove("hidden");
            contactForm.reset();
        }
    });
});