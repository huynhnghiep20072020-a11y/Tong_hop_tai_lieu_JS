let players = [];
const positions = ["", "Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];

let n = Number(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

for (let i = 0; i < n; i++) {
    let code;
    let isDuplicate;
    do {
        isDuplicate = false;
        code = prompt("Nhập cầu thủ " + (i + 1) + ":\nMã cầu thủ:");
        
        for (let j = 0; j < players.length; j++) {
            let parts = players[j].split("-");
            if (parts[0] === code) {
                isDuplicate = true;
                alert("Mã cầu thủ đã tồn tại!");
                break;
            }
        }
    } while (isDuplicate);

    let name = prompt("Nhập tên cầu thủ:");

    let posCode;
    do {
        posCode = Number(prompt("Chọn vị trí (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):"));
    } while (posCode < 1 || posCode > 4);

    let playerString = code + "-" + name + "-" + positions[posCode];
    players.push(playerString);
}

function printTeamRoster() {
    console.log("-----------------------------------------");
    console.log("Danh sách cầu thủ hiện tại (Mảng đơn):");
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let pCode = parts[0];
        let pName = parts[1];
        let pPos = parts[2];
        console.log((i + 1) + ". " + pCode + " - " + pName + " - " + pPos);
    }
}

printTeamRoster();