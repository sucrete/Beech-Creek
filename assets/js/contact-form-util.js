(function () {
  emailjs.init("bgPMvjgJ9C-HJ3z9j");
})();

const btn = document.getElementsByClassName("button-text")[0];
const inputs = document.getElementsByClassName("inputs-wrapper")[0];
const msgBox = document.getElementsByClassName("message-sent-box")[0];

const firstName = document.getElementById("name");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.textContent = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_u910u8k";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.textContent = "Submit";
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";

        inputs.classList.toggle("subdued");
        msgBox.classList.toggle("show");
      },
      (err) => {
        btn.textContent = "Submit";
        alert(JSON.stringify(err));
      }
    );
  });
