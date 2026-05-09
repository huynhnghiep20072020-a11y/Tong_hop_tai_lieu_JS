let playerIds = [];
let playerPositions = [];
const positionNames = ["", "Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];

let n = Number(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

for (let i = 0; i < n; i++) {
    let id;
    let isDuplicate;
    do {
        isDuplicate = false;
        id = prompt("Nhập cầu thủ " + (i + 1) + ":\nMã cầu thủ:");
        
        for (let j = 0; j < playerIds.length; j++) {
            if (playerIds[j] === id) {
                isDuplicate = true;
                alert("Mã cầu thủ đã tồn tại, vui lòng nhập lại!");
                break;
            }
        }
    } while (isDuplicate);

    let posCode;
    do {
        posCode = Number(prompt("Nhập cầu thủ " + (i + 1) + ":\nVị trí (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):"));
    } while (posCode < 1 || posCode > 4);

    playerIds.push(id);
    playerPositions.push(positionNames[posCode]);
}

function printTeamRoster() {
    console.log("Đội bóng hiện tại (" + playerIds.length + " cầu thủ):");
    for (let i = 0; i < playerIds.length; i++) {
        console.log((i + 1) + ". " + playerIds[i] + " - " + playerPositions[i]);
    }
}

function findPlayersByPosition(position) {
    let indices = [];
    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            indices.push(i);
        }
    }
    return indices;
}

printTeamRoster();

let searchCode = Number(prompt("Nhập vị trí cầu thủ muốn đếm số lượng (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):"));
let searchName = positionNames[searchCode];

let foundIndices = findPlayersByPosition(searchName);

console.log("Số cầu thủ ở vị trí " + searchName + ": " + foundIndices.length);
console.log("Các chỉ số cầu thủ ở vị trí " + searchName + ": " + foundIndices.join(", "));