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
const sendEmail = (e) => {
   e.preventDefault();
   if (theName.value === "" || email.value === "" || subject.value === "")
      console.log("error");
   else {
      // serviceID - templateID - formID - publicKey

      emailjs.sendForm(
         "service_6ofdhi6",
         "template_lkosary",
         "#form",
         "zswI7LMZy7B8Rd-29"
      );
   }
};
form.addEventListener("submit", sendEmail);
