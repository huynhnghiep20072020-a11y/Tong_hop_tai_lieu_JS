let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function printTeamRoster() {
    console.log("--- DANH SÁCH CẦU THỦ ---");
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let code = parts[0];
        let name = parts[1];
        let position = parts[2];
        console.log((i + 1) + ". " + code + " | " + name + " | " + position);
    }
}

function countPlayerByPosition(arr) {
    let countGK = 0;
    let countDF = 0;
    let countMF = 0;
    let countFW = 0;

    for (let i = 0; i < arr.length; i++) {
        let parts = arr[i].split("-");
        let pos = parts[2];
        
        if (pos === "Thủ môn") countGK++;
        else if (pos === "Hậu vệ") countDF++;
        else if (pos === "Tiền vệ") countMF++;
        else if (pos === "Tiền đạo") countFW++;
    }

    console.log("\n--- THỐNG KÊ VỊ TRÍ ---");
    console.log("Thủ môn: " + countGK);
    console.log("Hậu vệ: " + countDF);
    console.log("Tiền vệ: " + countMF);
    console.log("Tiền đạo: " + countFW);
}

function hasGoalkeeper() {
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        if (parts[2] === "Thủ môn") {
            return true;
        }
    }
    return false;
}

printTeamRoster();

countPlayerByPosition(players);

console.log("\n--- KIỂM TRA THỦ MÔN ---");
if (hasGoalkeeper()) {
    console.log("Đội bóng đã có thủ môn.");
} else {
    console.log("Đội bóng chưa có thủ môn.");
}