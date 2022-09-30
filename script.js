const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

const btn = document.createElement("button");
btn.setAttribute('id', 'loggaUt');
btn.textContent = 'Logga ut';

const heading = document.createElement("h4");
heading.setAttribute('id', 'headerLogIn');
heading.textContent = 'Du är inloggad!';

const username = "Sara"
const password = "qwe123"

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === username && pass === password) {
        let changeHeadingText = document.getElementById("title").innerHTML = "Välkommen!";
        localStorage.setItem("userName", "Sara");

        const box = document.getElementById('box');
        box.appendChild(btn);

        const loginMsg = document.getElementById('loginMsg');
        loginMsg.appendChild(heading);

        document.getElementById("login-form-submit").style.display ="none"

        document.getElementById("login-error-msg").style.display ="none"

    }   
    else {
        loginErrorMsg.style.opacity = 1;
    }
})

btn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    location.reload();
})

window.onload = function isLoggedIn() {
    if(localStorage.getItem("userName", "Sara")) {
        document.getElementById("login-error-msg").style.display ="none"
    
        const changeHeadingText = document.getElementById("title").innerHTML = "Välkommen!";
        
        const loginMsg = document.getElementById('loginMsg');
        loginMsg.appendChild(heading);
        
        const box = document.getElementById('box');
        box.appendChild(btn);

        document.getElementById("login-form-submit").style.display ="none"
    }
}