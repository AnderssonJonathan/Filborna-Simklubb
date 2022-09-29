const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const el = document.createElement("button");
el.setAttribute('id', 'my-id');
el.textContent = 'Logga ut';

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Sara" && password === "123") {
        const changeHeadingText = document.getElementById("login-header").innerHTML = "Välkommen";
        const box = document.getElementById('box');
        box.appendChild(el);
        loginErrorMsg.style.opacity = 0;

    }   else {
        loginErrorMsg.style.opacity = 1;  
    }
})

el.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
})
