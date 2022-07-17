const singUp = document.querySelector(".sign-up input");
const logIn = document.querySelector(".log-in input");

singUp.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.innerHTML = "<p class='greeting'>Your Request Was Received Successfuly!</p>";
});

logIn.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".container").innerHTML = "";
    createLoginForm(); 
});


function createLoginForm() {
    let form = document.createElement("form");
    form.setAttribute("class", "greeting");
    let emailField = document.createElement("input");
    setAttributes(emailField, {"type": "email","name": "user-email", "placeholder": "Enter your email"});
    let passwordField = document.createElement("input");
    setAttributes(passwordField, {"type": "password","name": "password", "placeholder": "Enter your password"});
    let login = document.createElement("input");
    setAttributes(login, {"type": "submit", "value": "login", "class": "login-btn"});
    form.appendChild(emailField);
    form.appendChild(passwordField);
    form.appendChild(login);
    document.body.appendChild(form);
}


function setAttributes(el, attrs) {
    for(let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

