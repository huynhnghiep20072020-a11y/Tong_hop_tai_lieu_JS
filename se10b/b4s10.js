const players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 }
];

function analyzeSalary(minYears, teamPlayers) {
    let filteredList = teamPlayers.filter(function(player) {
        return player.years >= minYears;
    });

    let totalSalary = filteredList.reduce(function(sum, player) {
        return sum + player.salary;
    }, 0);

    let highestPaid = null;
    let lowestPaid = null;

    if (filteredList.length > 0) {
        filteredList.sort(function(a, b) {
            return b.salary - a.salary;
        });
        highestPaid = filteredList[0];
        lowestPaid = filteredList[filteredList.length - 1];
    }

    return {
        totalSalary: totalSalary,
        highestPaid: highestPaid,
        lowestPaid: lowestPaid
    };
}

let result1 = analyzeSalary(10, players);
console.log(result1);

let result2 = analyzeSalary(30, players);
console.log(result2);