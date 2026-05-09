const teamHistory = [
    {
        name: "Messi",
        position: "Forward",
        nationality: "Argentina",
        seasons: {
            "2022-2023": { matches: 34, goals: 21, assists: 14, yellowCards: 3 },
            "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2 },
            "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1 }
        }
    },
    {
        name: "Ronaldo",
        position: "Forward",
        nationality: "Portugal",
        seasons: {
            "2022-2023": { matches: 38, goals: 28, assists: 8, yellowCards: 5 },
            "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },
            "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 }
        }
    }
];

function generatePlayerSeasonReport(playerName, teamHistory) {
    let player = teamHistory.find(function(p) {
        return p.name === playerName;
    });

    if (!player) {
        return "Không tìm thấy cầu thủ " + playerName;
    }

    let totalMatches = 0;
    let totalGoals = 0;
    let totalAssists = 0;
    let totalYellowCards = 0;
    let bestSeasonInfo = { season: "", goals: -1, assists: -1 };

    for (let seasonYear in player.seasons) {
        let stats = player.seasons[seasonYear];

        totalMatches += stats.matches;
        totalGoals += stats.goals;
        totalAssists += stats.assists;
        totalYellowCards += stats.yellowCards;

        let isBetterSeason = false;
        if (stats.goals > bestSeasonInfo.goals) {
            isBetterSeason = true;
        } else if (stats.goals === bestSeasonInfo.goals) {
            if (stats.assists > bestSeasonInfo.assists) {
                isBetterSeason = true;
            }
        }

        if (isBetterSeason) {
            bestSeasonInfo = {
                season: seasonYear,
                goals: stats.goals,
                assists: stats.assists
            };
        }
    }

    let avgGoals = 0;
    let avgAssists = 0;
    if (totalMatches > 0) {
        avgGoals = Number((totalGoals / totalMatches).toFixed(2));
        avgAssists = Number((totalAssists / totalMatches).toFixed(2));
    }

    return {
        name: player.name,
        position: player.position,
        nationality: player.nationality,
        careerStats: {
            totalMatches: totalMatches,
            totalGoals: totalGoals,
            totalAssists: totalAssists,
            totalYellowCards: totalYellowCards,
            averageGoalsPerMatch: avgGoals,
            averageAssistsPerMatch: avgAssists,
            bestSeason: bestSeasonInfo
        }
    };
}

let report = generatePlayerSeasonReport("Messi", teamHistory);
console.log(report);