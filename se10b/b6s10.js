const players = [
    { name: "Messi", position: "Forward", age: 36, goals: 25, assists: 15, matches: 34, yellowCards: 2 },
    { name: "Ronaldo", position: "Forward", age: 39, goals: 30, assists: 10, matches: 38, yellowCards: 4 },
    { name: "Neymar", position: "Forward", age: 32, goals: 18, assists: 20, matches: 32, yellowCards: 3 },
    { name: "De Bruyne", position: "Midfielder", age: 33, goals: 8, assists: 25, matches: 35, yellowCards: 1 },
    { name: "Kante", position: "Midfielder", age: 33, goals: 2, assists: 5, matches: 36, yellowCards: 0 },
    { name: "Van Dijk", position: "Defender", age: 33, goals: 5, assists: 3, matches: 33, yellowCards: 2 },
    { name: "Alisson", position: "Goalkeeper", age: 31, goals: 0, assists: 1, matches: 37, yellowCards: 0 }
];

function generateRankingReport(minMatches, players) {
    let filteredList = players.filter(function(player) {
        return player.matches >= minMatches;
    });

    let rankedList = filteredList.map(function(player) {
        let performanceRaw = (player.goals + player.assists) / player.matches;
        let performanceScore = Number(performanceRaw.toFixed(2));
        
        let penalty = (player.yellowCards / player.matches) * 10;
        let efficiencyScore = performanceScore - penalty;

        return {
            name: player.name,
            goals: player.goals,
            performanceScore: performanceScore,
            efficiencyScore: efficiencyScore
        };
    });

    rankedList.sort(function(a, b) {
        if (b.efficiencyScore !== a.efficiencyScore) {
            return b.efficiencyScore - a.efficiencyScore;
        }
        if (b.performanceScore !== a.performanceScore) {
            return b.performanceScore - a.performanceScore;
        }
        return b.goals - a.goals;
    });

    console.log("XẾP HẠNG ĐỘI BÓNG (từ minMatches trở lên)");

    rankedList.forEach(function(player, index) {
        console.log((index + 1) + ". " + player.name + " - Efficiency: " + player.efficiencyScore.toFixed(2) + " | Performance: " + player.performanceScore.toFixed(2) + " | Goals: " + player.goals);
    });

    console.log("Tổng số cầu thủ xếp hạng: " + rankedList.length);

    if (rankedList.length > 0) {
        console.log("Cầu thủ xuất sắc nhất: " + rankedList[0].name);

        let top3 = rankedList.slice(0, 3);
        let sumEfficiency = top3.reduce(function(total, p) {
            return total + p.efficiencyScore;
        }, 0);
        
        let avgEfficiency = sumEfficiency / top3.length;
        console.log("Trung bình efficiency top 3: " + avgEfficiency.toFixed(2));
    }
}

generateRankingReport(30, players);