const form = document.getElementById("contact-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const userMsg = document.getElementById("message");

const errorMsg = document.getElementsByClassName("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate(username, 0, "Username cannot be blank");
  validate(email, 1, "Please enter your email address");
  validate(subject, 2, "Subject cannot be blank");
  validate(userMsg, 3, "Message cannot be blank");
     sendQuery();
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

function sendQuery(){
  let name = document.querySelector("#username"),
   email = document.querySelector("#email"),
   subject = document.querySelector("#subject"),
   message = document.querySelector("#message");

   let queries = JSON.parse(localStorage.getItem('queries'));
     if (queries) {
       queries = queries.length > 0?queries : [];
     }else{
         queries =[]
     }
    let newQuery = {
       name:name.value,
       email: email.value,
       subject:subject.value,
       message: message.value
   }
    queries.push(newQuery)
   localStorage.setItem('queries',JSON.stringify(queries));
  //  alert("Your query has been sent successfully");
  // window.location = "http://127.0.0.1:5501/index.html#"

}