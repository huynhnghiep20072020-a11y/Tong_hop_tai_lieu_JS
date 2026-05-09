let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E"
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

function printTeamRoster() {
    console.log("-----------------------------------------");
    console.log("Danh sách cầu thủ hiện tại:");
    for (let i = 0; i < playerIds.length; i++) {
        console.log((i + 1) + ". " + playerIds[i] + " - " + playerNames[i] + " - " + playerJerseyNumbers[i]);
    }
    console.log("-----------------------------------------");
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
    let index = -1;
    for (let i = 0; i < playerIds.length; i++) {
        if (playerIds[i] === playerId) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        playerNames[index] = newName;
        playerJerseyNumbers[index] = newJerseyNumber;
        return true;
    }
    return false;
}

printTeamRoster();

let inputId = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

let isExist = false;
for (let i = 0; i < playerIds.length; i++) {
    if (playerIds[i] === inputId) {
        isExist = true;
        break;
    }
}

if (isExist) {
    let newName = prompt("Nhập tên mới cho cầu thủ:");
    let newJerseyNumber = Number(prompt("Nhập số áo mới (số nguyên từ 1-99):"));

    let result = updatePlayerNameAndJersey(inputId, newName, newJerseyNumber);

    if (result) {
        console.log("Cập nhật thành công!");
        printTeamRoster();
    }
} else {
    console.log("Không tìm thấy cầu thủ với mã này!");
}