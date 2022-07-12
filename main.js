const singUp = document.querySelector(".sign-up input");
const logIn = document.querySelector(".log-in input");

singUp.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.innerHTML = "<p class='greeting'>Your Request Was Received Successfuly!</p>";
});

logIn.addEventListener("click", function(e){
    e.preventDefault();
    document.body.innerHTML = "<p class='greeting'>Coming Soon!</p>";


});
