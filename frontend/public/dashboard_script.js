document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------------
       👤 LOAD USER
    --------------------------------*/
    const storedUser = JSON.parse(localStorage.getItem("stayMatchUser"));

    if (!storedUser) {
        window.location.href = "index.html";
        return;
    }

    /* -------------------------------
       👋 GREETING
    --------------------------------*/
    const greeting = document.getElementById("user-greeting");

    if (greeting) {
        greeting.innerText = `Welcome back, ${storedUser.name} 👋`;
    }

    /* -------------------------------
       🏆 LOAD FINAL VERDICT
    --------------------------------*/
    const verdictBox = document.getElementById("verdictText");
    const storedVerdict = localStorage.getItem("finalVerdict");

    if (verdictBox) {
        if (storedVerdict) {
            verdictBox.innerText = storedVerdict;
        } else {
            verdictBox.innerText = "Run Smart Analysis to see result...";
        }
    }

});
function showFinalVerdict() {
    console.log("Clicked ✅"); // debug

    const container = document.getElementById("insightContent");

    if (!container) {
        alert("Panel not found ❌");
        return;
    }

    const compatibility = localStorage.getItem("compatibility") || 78;
    const conflict = localStorage.getItem("conflict") || 30;
    const fairness = localStorage.getItem("fairness") || 70;

    let verdict = "";

    if (compatibility > 75 && conflict < 40 && fairness > 60) {
        verdict = "✅ Ideal Roommates";
    } else if (compatibility > 60 && conflict < 60) {
        verdict = "👍 Good Match";
    } else {
        verdict = "⚠️ Not Recommended";
    }

    container.innerHTML = `
        <h3>🏆 Final Recommendation</h3>

        <p><strong>Compatibility:</strong> ${compatibility}%</p>
        <p><strong>Conflict Risk:</strong> ${conflict}%</p>
        <p><strong>Chore Fairness:</strong> ${fairness}%</p>

        <h2 style="margin-top:10px;">${verdict}</h2>
    `;
}

/* -------------------------------
   🔓 LOGOUT
--------------------------------*/
function logout() {
    localStorage.removeItem("stayMatchUser");
    localStorage.removeItem("finalVerdict"); // optional cleanup
    window.location.href = "index.html";
}


/* -------------------------------
   🚀 NAVIGATION HELPERS
--------------------------------*/
function openMatching() {
    window.location.href = "matching.html";
}

/* -------------------------------
   🌍 GLOBAL EXPORT
--------------------------------*/

window.logout = logout;
window.openMatching = openMatching;
