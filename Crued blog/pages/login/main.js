let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(email, 0, "Email cannot be blank");
  engine(password, 1, "Password cannot be blank");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
    window.location.replace("../dashboard.html");
  }
};
