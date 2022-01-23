const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    span1.innerText = `Log Out`;
    span2.innerText = `[${username}]`
    greeting.appendChild(span1);
    greeting.appendChild(span2);
    addEvent();

    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function addEvent(){
    greeting.querySelector("span:first-child").addEventListener("click",logOut);
}

function logOut(){
    localStorage.removeItem("username");
    location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

