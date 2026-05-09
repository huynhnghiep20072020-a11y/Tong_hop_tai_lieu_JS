const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};

function addPerformanceScore(player) {
    let score = (player.goals + player.assists) / player.matchesPlayed;
    player.performancePerMatch = Number(score.toFixed(2));

    if (player.performancePerMatch >= 1.0) {
        player.isKeyPlayer = true;
    } else {
        player.isKeyPlayer = false;
    }

    console.log(player);
}

addPerformanceScore(player);