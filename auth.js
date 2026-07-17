 function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const message  = document.getElementById("message");
    const guestId = "guest_" + Math.floor(Math.random() * 100000);

    if (username === "" || password === "") {
        message.style.color = "yellow";
        message.textContent = "Username dan password wajib diisiii!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    
    let valid = users.find(
        u => u.username === username && u.password === password
    );

    if (valid) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", username);
        window.location.href = "Artify.html";
    } else {
        message.style.color = "red";
        message.textContent = "Username sudah di pakai";
    }
 }


function loginGoogle() {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", "Google User");
    window.location.href = "Artify.html";
}

function loginGuest() {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", "Guest");
    window.location.href = "Artify.html";
}


function checkLogin() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html";
    }
}


function logout() {
    
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}