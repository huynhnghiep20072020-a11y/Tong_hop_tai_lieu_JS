const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper"
];

function filterPlayersByPosition(position, players) {
    let result = players.filter(function(player) {
        let parts = player.split(" - ");
        return parts[1] === position;
    });
    return result;
}
let midfielderList = filterPlayersByPosition("Midfielder", players);
console.log(midfielderList);
let forwardList = filterPlayersByPosition("Forward", players);
console.log(forwardList);