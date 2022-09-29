const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const el = document.createElement("button");
el.setAttribute('id', 'my-id');
el.textContent = 'Logga ut';
const username = "Sara"
const password = "qwe123"

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === username && pass === password) {
        const changeHeadingText = document.getElementById("login-header").innerHTML = "Välkommen";
        localStorage.setItem("isLoggedIn", true);
        /*localStorage.setItem("password", "123");*/
        const box = document.getElementById('box');
        box.appendChild(el);
        loginErrorMsg.style.opacity = 0;

    }   else {
        loginErrorMsg.style.opacity = 1;
        localStorage.setItem("isLoggedIn", false);  
    }
})

el.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    location.reload();
})

window.onload = function isLoggedIn() {
    if(localStorage.getItem("isLoggedIn")){
        setUpEvents();
    }}

