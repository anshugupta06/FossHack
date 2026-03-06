function calculateCompatibility(user1, user2, weights) {

    let score = 0;
    let totalWeight = 0;

    for (let key in weights) {

        let diff = Math.abs(user1[key] - user2[key]);

        let similarity = 1 - (diff / 5);

        score += similarity * weights[key];

        totalWeight += weights[key];
    }

    return (score / totalWeight) * 100;
}

module.exports = calculateCompatibility;
