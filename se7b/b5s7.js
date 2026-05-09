let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function getAllPositions() {
    let positions = [];
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let pos = parts[2];
        
        if (!positions.includes(pos)) {
            positions.push(pos);
        }
    }
    return positions;
}

function findPlayersWithLongestName() {
    let longestName = "";
    
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let name = parts[1];
        
        if (name.length > longestName.length) {
            longestName = name;
        }
    }
    return longestName;
}

function countPlayersStartingWithLetter(letter) {
    let count = 0;
    let searchChar = letter.toLowerCase();

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let name = parts[1];
        
        if (name.toLowerCase().startsWith(searchChar)) {
            count++;
        }
    }
    return count;
}

console.log("Danh sách các vị trí (không trùng lặp):");
console.log(getAllPositions());

console.log("\nCầu thủ có tên dài nhất:");
console.log(findPlayersWithLongestName());

let inputChar = prompt("Nhập chữ cái đầu tiên của tên cần đếm (Ví dụ: N, T, H):");
console.log("\nSố lượng cầu thủ có tên bắt đầu bằng chữ " + inputChar + ":");
console.log(countPlayersStartingWithLetter(inputChar));