// ===================== MOBILE TOGGLE =====================
const toggleMobile = document.getElementById("toggle-mobile");
const asideBar = document.getElementById("aside");

toggleMobile.addEventListener("click", () => {
   asideBar.classList.toggle("show");
   toggleMobile.classList.toggle("close");
});
// ===================== INPUT FIELD EFFECT =====================
const spans = document.querySelectorAll(".input-title");
const inputsField = document.querySelectorAll(".input-field");

inputsField.forEach((input) => {
   input.addEventListener("focus", (_) => {
      input.previousElementSibling.classList.add("active");
   });
   input.addEventListener("blur", (_) => {
      spans.forEach((span) => {
         if (span.nextElementSibling.value === "")
            span.classList.remove("active");
      });
   });
});
// ===================== SEND EMAIL =====================
const form = document.getElementById("form");
const theName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const validationMessage = document.getElementById("validation-message");
const sendEmail = (e) => {
   e.preventDefault();
   if (theName.value === "" || email.value === "" || subject.message === "") {
      theName.style.borderColor = "red";
      email.style.borderColor = "red";
      message.style.borderColor = "red";
      checkField("Please fill in all required fields.", "red");
   } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
   ) {
      email.style.borderColor = "red";
      checkField("You have entered an invalid email address.", "red");
   } else {
      // serviceID - templateID - formID - publicKey
      emailjs
         .sendForm(
            "service_6ofdhi6",
            "template_lkosary",
            "#form",
            "zswI7LMZy7B8Rd-29"
         )
         .then((_) => {
            theName.style = "";
            email.style = "";
            message.style = "";
            checkField(
               "Your e-mail has been successfully sent. Thank you.",
               "green"
            );
         });
      checkField("Please wait. Processing", "grey");
   }
};
const checkField = (message, color) => {
   validationMessage.textContent = message;
   validationMessage.style.backgroundColor = color;
   validationMessage.classList.add("show");
   setTimeout((_) => {
      validationMessage.classList.remove("show");
   }, 4000);
};
form.addEventListener("submit", sendEmail);
