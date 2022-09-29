const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const btn = document.createElement("button");
btn.setAttribute('id', 'my-id');
btn.textContent = 'Logga ut';
const heading = document.createElement("h4");
heading.setAttribute('id', '');
heading.textContent = 'Du är inloggad!';
const username = "Sara"
const password = "qwe123"

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === username && pass === password) {
        let changeHeadingText = document.getElementById("loginHeader").innerHTML = "Välkommen!";
        localStorage.setItem("isLoggedIn", true);

        const box = document.getElementById('box');
        box.appendChild(btn);

        const header = document.getElementById('header');
        header.appendChild(heading);

        document.getElementById("login-form-submit").style.display ="none"
        loginErrorMsg.style.opacity = 0;
    }   
    else {
        loginErrorMsg.style.opacity = 1;
        localStorage.setItem("isLoggedIn", false);  
    }
})

btn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    location.reload();
})

window.onload = function isLoggedIn() {
    if(localStorage.getItem("isLoggedIn")) {
        console.log('Hey, you are learning window onload event in JavaScript. Script will be loaded.');
        const changeHeadingText = document.getElementById("loginHeader").innerHTML = "Välkommen!";
        const header = document.getElementById('header');
        header.appendChild(heading);
        const box = document.getElementById('box');
        box.appendChild(btn);
        document.getElementById("login-form-submit").style.display ="none"
    }
}