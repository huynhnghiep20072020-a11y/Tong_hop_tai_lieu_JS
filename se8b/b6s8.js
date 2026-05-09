const players = [
    "Messi - Forward - 25 - 15",
    "Ronaldo - Forward - 30 - 10",
    "Neymar - Forward - 18 - 20",
    "De Bruyne - Midfielder - 8 - 25",
    "Kante - Midfielder - 2 - 5",
    "Van Dijk - Defender - 5 - 3",
    "Alisson - Goalkeeper - 0 - 1"
];

function reportTopPerformers(minPerformance, players) {
    let result = players
        .map(player => {
            let parts = player.split(" - ");
            let name = parts[0];
            let goals = Number(parts[2]);
            let assists = Number(parts[3]);
            let score = goals + assists;
            
            return {
                name: name,
                score: score
            };
        })
        .filter(item => item.score >= minPerformance);

    result.forEach(item => {
        console.log(item.name + ": " + item.score);
    });

    let totalPerformance = result.reduce((sum, item) => {
        return sum + item.score;
    }, 0);

    console.log("Tổng hiệu suất: " + totalPerformance);

    return totalPerformance;
}

reportTopPerformers(30, players);