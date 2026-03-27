console.log("StayMatch Neural Core Loaded");

const API = "http://localhost:5000/api";

/* -------- TAB SWITCHING ENGINE -------- */
const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const loginFormUI = document.getElementById("loginForm");
const signupFormUI = document.getElementById("signupForm");

function toggleTabs(activeTab, inactiveTab, showForm, hideForm) {
    activeTab.classList.add("active");
    inactiveTab.classList.remove("active");
    showForm.style.display = "block";
    showForm.classList.add("active");
    hideForm.style.display = "none";
    hideForm.classList.remove("active");
}

loginTab.onclick = () => toggleTabs(loginTab, signupTab, loginFormUI, signupFormUI);
signupTab.onclick = () => toggleTabs(signupTab, loginTab, signupFormUI, loginFormUI);

/* -------- AUTHENTICATION CORE -------- */

async function signupUser() {
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-pass").value;
    const btn = document.querySelector("#signupForm .btn-primary");

    if(!name || !email || !password) return alert("All neural fields required.");

    btn.innerText = "Syncing Profile...";
    btn.disabled = true;

    try {
        const res = await fetch(`${API}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();

        if (data.token) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("stayMatchUser", JSON.stringify({
                name: data.user?.name || name,
                email: data.user?.email || email
            }));
            window.location.href = "dashboard.html";
        } else {
            alert(data.msg || "Neural Sync Failed");
        }
    } catch (err) {
        console.error("Auth Error:", err);
        alert("Server Connectivity Lost");
    } finally {
        btn.innerText = "Create Neural Profile";
        btn.disabled = false;
    }
}

async function loginUser() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-pass").value;
    const btn = document.querySelector("#loginForm .btn-primary");

    if(!email || !password) return alert("Credentials required.");

    btn.innerText = "Verifying Identity...";
    btn.disabled = true;

    try {
        const res = await fetch(`${API}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (data.token) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("stayMatchUser", JSON.stringify({
                name: data.user?.name || "User",
                email: data.user?.email || email
            }));
            window.location.href = "dashboard.html";
        } else {
            alert(data.msg || "Authentication Denied");
        }
    } catch (err) {
        console.error("Auth Error:", err);
        alert("Neural Server Timeout");
    } finally {
        btn.innerText = "Initialize Session ⚡";
        btn.disabled = false;
    }
}