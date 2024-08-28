const main = document.querySelector("main");
const form = document.getElementById("form");
const formLabel = document.getElementById("label");
const formInput = document.querySelector("input");
const thanksForSubscribing = document.getElementById("success-message");
const thanksMessage = document.querySelector(".thanks-message");
const dismissbtn = document.getElementById("dismiss-message-btn");

const emailCharacters =
  /^[a-zA-Z0-9]+[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let validEmail = true;

//dismiss message button back to form
const setUpDissmisButton = (formLabel) => {
  dismissbtn.addEventListener("click", () => {
    main.style.display = "flex";
    thanksForSubscribing.style.display = "none";
    thanksMessage.style.display = "none";
    formInput.value = "";
    formInput.classList.remove("email-invalid");
    formInput.classList.remove("email-valid");
    formLabel.innerHTML = "";
    formLabel.style.color = "";
    validEmail = true;
  });
};

//function to create new label element
const createLabel = () => {
  validEmail = false;
  formLabel.style.display = "flex";
  formLabel.style.justifyContent = "space-between";
  formLabel.style.width = "100%";
  const validEmailRequired = document.createElement("label");
  btn(validEmailRequired);
  formLabel.appendChild(validEmailRequired);
  validEmailRequired.innerHTML = "Valid email required";
  validEmailRequired.style.color = "red";
};

const formSubmit = (e) => {
  e.preventDefault();
  const data = {};
  const emailFields = e.target.querySelectorAll("input, span");
  for (const field of emailFields) {
    data[field.name] = field.value;
  }

  const email = data["email"];
  if (emailCharacters.test(email)) {
    main.style.display = "none";
    thanksForSubscribing.style.display = "flex";
  } else {
    formInput.classList.remove("email-valid");
    formInput.classList.add("email-invalid");
    if (validEmail) {
      createLabel();
    }
  }
};

form.addEventListener("submit", formSubmit);
setUpDissmisButton(formLabel);
