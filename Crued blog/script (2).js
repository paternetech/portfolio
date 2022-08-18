const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const userMsg = document.getElementById("message");

const errorMsg = document.getElementsByClassName("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate(username, 0, "Username cannot be blank");
  validate(email, 1, "Please enter a valid email address");
  validate(subject, 2, "Subject cannot be blank");
  validate(userMsg, 3, "Message cannot be blank");
});

let validate = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
  }
};
