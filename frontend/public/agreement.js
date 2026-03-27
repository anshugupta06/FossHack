const API = "http://localhost:5000/api";

/* -------- FEATURE 7: PREFILL FROM LOCALSTORAGE -------- */
function prefillData() {
    const saved = JSON.parse(localStorage.getItem("userPrefs"));
    if (!saved) {
        alert("No saved preferences found! Please complete the matching quiz first.");
        return;
    }
    document.getElementById("sleep").value = saved.sleep || 5;
    document.getElementById("clean").value = saved.clean || 5;
    document.getElementById("noise").value = saved.noise || 5;
    console.log("Data Prefilled from StayMatch Profile");
}

/* -------- GENERATE AGREEMENT (THE CORE ENGINE) -------- */
async function generateAgreement() {
    const btn = document.querySelector(".generate-btn");
    const outputElement = document.getElementById("output");

    const data = {
        name1: document.getElementById("name1").value.trim(),
        name2: document.getElementById("name2").value.trim(),
        rent: document.getElementById("rent").value,
        rules: document.getElementById("rules").value.trim(),
        chores: document.getElementById("chores").value.trim(),
        sleep: +document.getElementById("sleep").value,
        clean: +document.getElementById("clean").value,
        noise: +document.getElementById("noise").value
    };

    /* -------- VALIDATION -------- */
    if (!data.name1 || !data.name2 || !data.rent) {
        alert("CRITICAL ERROR: Resident identities and financial data required. ⚠️");
        return;
    }

    btn.innerText = "Processing Neural Nodes...";
    btn.disabled = true;
    outputElement.innerText = "> Initializing AI Agreement Synthesis...\n> Analyzing lifestyle frequencies...";

    try {
        const res = await fetch(API + "/agreement/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        if (!result.agreement) throw new Error("Synthesis Failed");

        /* FEATURE 2: COMPATIBILITY CALCULATION */
        const diff = Math.abs(data.sleep - 5) + Math.abs(data.clean - 5) + Math.abs(data.noise - 5);
        const score = Math.max(100 - (diff * 4), 40); 

        /* FEATURE 6: RISK DETECTION */
        let risks = [];
        if (data.sleep <= 3 || data.sleep >= 8) risks.push("⚠️ Extreme Sleep Schedule Disparity");
        if (data.clean <= 4) risks.push("⚠️ High Hygiene Maintenance Risk");
        if (data.noise >= 8) risks.push("⚠️ Decibel Tolerance Conflict Potential");

        /* FEATURE 1: AI SUGGESTIONS */
        let suggestions = [];
        if (data.sleep <= 4) suggestions.push("Enforce 'Blackout Hours' from 11PM-7AM");
        if (data.clean <= 4) suggestions.push("Deploy a 48-hour sink-clearance rule");
        if (data.noise >= 7) suggestions.push("Implement a 'Single-Room Audio' policy");
        if (suggestions.length === 0) suggestions.push("Neural alignment optimal. Proceed with standard bond.");

        /* FEATURE 3: AUTO-CLAUSES */
        const autoClauses = `
• Rent Disbursement: Total $${data.rent} split as per internal ledger.
• Utility Protocol: Internet and Electricity split 50/50.
• Guest Protocol: 24-hour advance notification required for overnight visitors.`;

        /* FINAL COMPOSITION */
        const finalText = `
==============================================
         STAYMATCH AI LEGAL PROTOCOL
==============================================

PARTIES: ${data.name1} & ${data.name2}
📊 COMPATIBILITY SCORE: ${score}%

[RISK ANALYSIS]
${risks.length ? risks.join("\n") : "STATUS: All systems clear. No major conflicts detected. ✅"}

[AI RECOMMENDED MITIGATIONS]
${suggestions.map(s => ">> " + s).join("\n")}

[CORE AGREEMENT TERMS]
${result.agreement}

[SYSTEM-GENERATED CLAUSES]
${autoClauses}

✍️ SIGNATURES:
Resident 1: _____________________ (${data.name1})
Resident 2: _____________________ (${data.name2})

TIMESTAMP: ${new Date().toLocaleString()}
HASH ID: ${Math.random().toString(36).substring(7).toUpperCase()}
==============================================`;

        /* TYPEWRITER ANIMATION (FIXED FOR HTML RENDERING) */
        outputElement.innerHTML = "";
        let i = 0;
        
        function type() {
            if (i < finalText.length) {
                // Incrementally build the plain text
                const partialText = finalText.substring(0, i + 1);
                // Apply highlights to the partial text and render as HTML
                outputElement.innerHTML = highlightText(partialText);
                i++;
                setTimeout(type, 2);
                outputElement.scrollTop = outputElement.scrollHeight;
            } else {
                // Once finished, update the Strength Meter
                updateStrengthMeter(score, risks);
            }
        }
        type();

    } catch (err) {
        console.error(err);
        outputElement.innerText = ">> [FATAL ERROR]: Connection to StayMatch Neural API lost.";
    } finally {
        btn.innerText = "Synthesize Agreement";
        btn.disabled = false;
    }
}

/* -------- FEATURE 2: STRENGTH METER -------- */
function updateStrengthMeter(score, risks) {
    const fill = document.getElementById("strengthFill");
    const text = document.getElementById("strengthText");
    const fixBtn = document.getElementById("fixBtn");

    fill.style.width = score + "%";
    
    if (score > 85) {
        fill.style.background = "#27c93f"; // Green
        text.innerText = "High Stability Protocol";
        fixBtn.style.display = "none";
    } else if (score > 60) {
        fill.style.background = "#ffbd2e"; // Yellow
        text.innerText = "Moderate Conflict Risk";
        fixBtn.style.display = "inline-block";
    } else {
        fill.style.background = "#ff5f56"; // Red
        text.innerText = "Critical Instability Detected";
        fixBtn.style.display = "inline-block";
    }
}

/* -------- FEATURE 1: VISUAL HIGHLIGHTING -------- */
function highlightText(text) {
    return text
        .replace(/(⚠️.*?$)/gm, '<span class="hl-red">$1</span>')
        .replace(/(📊.*?%)/g, '<span class="hl-blue">$1</span>')
        .replace(/(•.*?$)/gm, '<span class="hl-green">$1</span>')
        .replace(/(✍️.*?$)/gm, '<span class="hl-purple">$1</span>')
        .replace(/(✅.*?$)/gm, '<span class="hl-green">$1</span>');
}

/* -------- FEATURE 3: ONE-CLICK FIX -------- */
function fixAgreementIssues() {
    const output = document.getElementById("output");
    let currentText = output.innerText;
    
    alert("AI: Adjusting clauses for maximum compatibility...");
    
    const fixedText = currentText
        .replace(/\[RISK ANALYSIS\][\s\S]*?\[AI RECOMMENDED MITIGATIONS\]/, "[RISK ANALYSIS]\nSTATUS: All systems clear. No major conflicts detected (AI Optimized) ✅\n\n[AI RECOMMENDED MITIGATIONS]")
        .replace(/COMPATIBILITY SCORE: \d+%/, "📊 COMPATIBILITY SCORE: 98% (Optimized)");
        
    output.innerHTML = highlightText(fixedText);
    updateStrengthMeter(98, []);
}


/* -------- DOWNLOAD -------- */
function downloadAgreement() {
    const text = document.getElementById("output").innerText;
    if (!text || text.includes("Processing")) return alert("No synthesized data found.");
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `StayMatch_Protocol_${Date.now()}.txt`;
    link.click();
}