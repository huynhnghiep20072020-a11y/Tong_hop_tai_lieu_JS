const playerNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson"
];

function getUpperNames(arr) {
    let upperArr = arr.map(function(name) {
        return name.toUpperCase();
    });
    return upperArr;
}

const result = getUpperNames(playerNames);
console.log(result);