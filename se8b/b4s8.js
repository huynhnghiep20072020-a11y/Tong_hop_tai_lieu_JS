const players = [
    "Messi - Forward - 25",
    "Ronaldo - Forward - 30",
    "Neymar - Forward - 18",
    "De Bruyne - Midfielder - 8",
    "Kante - Midfielder - 2",
    "Van Dijk - Defender - 5",
    "Alisson - Goalkeeper - 0"
];

function getReversedNames(arr) {
    let names = arr.map(function(player) {
        return player.split(" - ")[0];
    });
    return names.reverse();
}

console.log(getReversedNames(players));