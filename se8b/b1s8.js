const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper"
];

function displayPlayers(arr) {
    arr.forEach(function(player) {
        console.log(player);
    });
}

displayPlayers(players);