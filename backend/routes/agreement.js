const express = require("express");
const router = express.Router();

/* -------- GENERATE AGREEMENT -------- */

router.post("/generate", (req, res) => {
    try {
        const {
            name1,
            name2,
            rent,
            rules,
            chores,
            sleep,
            clean,
            noise
        } = req.body;

        const agreement = `
ROOMMATE AGREEMENT

This agreement is made between:

1. ${name1}
2. ${name2}

--------------------------------------

💰 RENT DETAILS:
Total Rent: ₹${rent}
Each Person Pays: ₹${Math.floor(rent / 2)}

--------------------------------------

🧹 CHORE DISTRIBUTION:
${chores}

--------------------------------------

🏠 HOUSE RULES:
${rules}

--------------------------------------

🧠 LIFESTYLE AGREEMENT:
- Sleep Schedule Compatibility: ${sleep}/10
- Cleanliness Agreement: ${clean}/10
- Noise Tolerance Agreement: ${noise}/10

--------------------------------------

⚖️ TERMS:
- Both parties agree to respect each other's space.
- Conflicts will be resolved mutually.
- This agreement is based on mutual trust.

--------------------------------------

SIGNATURES:

_____________________   _____________________
${name1}               ${name2}

Date: ${new Date().toLocaleDateString()}
`;

        res.json({ agreement });

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Agreement generation failed" });
    }
});

module.exports = router;