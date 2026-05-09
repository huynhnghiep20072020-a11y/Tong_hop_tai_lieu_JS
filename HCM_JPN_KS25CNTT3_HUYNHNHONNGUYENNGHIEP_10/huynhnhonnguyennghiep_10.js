let watchlist = [
    {id: "M001", title: "Truy tim long diem huong", director: "Christopher Nolan", year: 2010, genre: "Sci-Fi", rating: 8.8},
    {id: "M002", title: "Quy an tang", director: "Francis Ford Coppola", year: 1972, genre: "Crime", rating: 9.2},
    {id: "M003", title: "Doi cam lang", director: "Christopher Nolan", year: 2008, genre: "Action", rating: 9.0},
    {id: "M004", title: "Tinh nguoi duyen ma", director: "Quentin Tarantino", year: 1994, genre: "Crime", rating: 8.9},
    {id: "M005", title: "Túy lieu vang", director: "Robert Zemeckis", year: 1994, genre: "Drama", rating: 8.8}
];

const validGenres = ["Action", "Drama", "Sci-Fi", "Comedy", "Horror", "Thriller", "Crime"];

function hienThiDanhSachPhim() {
    console.log("--- DANH SACH PHIM ---");
    watchlist.forEach(phim => {
        console.log(`[${phim.id}] ${phim.title} - BD: ${phim.director} - Nam: ${phim.year} - The loai: ${phim.genre} - Rating: ${phim.rating}`);
    });
    console.log("Tong so phim: " + watchlist.length);
}

function themPhimMoi() {
    let id = prompt("Nhap ID phim (VD: M006):");
    let isIdExist = watchlist.some(phim => phim.id === id);
    if (isIdExist) {
        console.log("ID da ton tai, vui long chon ID khac.");
        return;
    }

    let title = prompt("Nhap ten phim:");
    let director = prompt("Nhap ten dao dien:");
    
    let isMovieExist = watchlist.some(phim => 
        phim.title.toLowerCase() === title.toLowerCase() && 
        phim.director.toLowerCase() === director.toLowerCase()
    );

    if (isMovieExist) {
        console.log("Phim nay da co trong watchlist.");
        return;
    }

    let year = parseInt(prompt("Nhap nam phat hanh:"));
    let currentYear = new Date().getFullYear();
    if (isNaN(year) || year < 1900 || year > currentYear + 5) {
        console.log("Nam phat hanh phai la so nguyen tu 1900 den " + (currentYear + 5) + ".");
        return;
    }

    let genre = prompt("Nhap the loai (Action, Drama, Sci-Fi, Comedy, Horror, Thriller):");
    if (!validGenres.includes(genre)) {
        console.log("The loai khong hop le. Phai la mot trong cac gia tri: 'Action', 'Drama', 'Sci-Fi', 'Comedy', 'Horror', 'Thriller'.");
        return;
    }

    let rating = parseFloat(prompt("Nhap diem rating (1.0 - 10.0):"));
    if (isNaN(rating) || rating < 1.0 || rating > 10.0) {
        console.log("Diem rating phai la so tu 1.0 den 10.0.");
        return;
    }

    watchlist.push({id, title, director, year, genre, rating});
    console.log(`Da them phim: ${title} (${year}) vao watchlist!`);
}

function xoaPhim() {
    let title = prompt("Nhap ten phim can xoa:");
    let index = watchlist.findIndex(phim => phim.title.toLowerCase() === title.toLowerCase());

    if (index === -1) {
        console.log(`Phim ${title} khong co trong watchlist.`);
        return;
    }

    let confirmDelete = prompt(`Ban co chac chan muon xoa phim "${watchlist[index].title}"? (y/n)`);
    if (confirmDelete.toLowerCase() === 'y') {
        let deletedTitle = watchlist[index].title;
        watchlist.splice(index, 1);
        console.log(`Da xoa phim ${deletedTitle} thanh cong!`);
    } else {
        console.log("Da huy thao tac xoa.");
    }
}

function capNhatThongTinPhim() {
    let title = prompt("Nhap ten phim can cap nhat:");
    let phim = watchlist.find(p => p.title.toLowerCase() === title.toLowerCase());

    if (!phim) {
        console.log(`Phim ${title} khong co trong watchlist!`);
        return;
    }

    let choice = prompt("Ban muon cap nhat gi? (1: Rating, 2: Genre, 3: Ca hai)");
    
    if (choice === "1" || choice === "3") {
        let newRating = parseFloat(prompt("Nhap rating moi (1.0 - 10.0):"));
        if (isNaN(newRating) || newRating < 1.0 || newRating > 10.0) {
            console.log("Diem rating phai la so tu 1.0 den 10.0.");
            return;
        }
        phim.rating = newRating;
    }

    if (choice === "2" || choice === "3") {
        let newGenre = prompt("Nhap the loai moi:");
        if (!validGenres.includes(newGenre)) {
            console.log("The loai khong hop le.");
            return;
        }
        phim.genre = newGenre;
    }

    console.log(`Da cap nhat phim: ${phim.title} (${phim.year})`);
}

function timPhim() {
    let type = prompt("Tim theo (1: Ten phim, 2: Dao dien):");
    let keyword = prompt("Nhap tu khoa tim kiem:").toLowerCase();

    if (type === "1") {
        let result = watchlist.find(phim => phim.title.toLowerCase().includes(keyword));
        if (result) {
            console.log(`Phim tim thay: ${result.title} - Dao dien: ${result.director}, The loai: ${result.genre}, Nam: ${result.year}, Rating: ${result.rating}/10`);
        } else {
            console.log(`Khong tim thay phim nao co tieu de ${keyword}.`);
        }
    } else if (type === "2") {
        let results = watchlist.filter(phim => phim.director.toLowerCase().includes(keyword));
        if (results.length > 0) {
            console.log(`Danh sach phim cua dao dien ${keyword}:`);
            results.forEach(phim => {
                console.log(`${phim.title} - ${phim.genre} (${phim.year}) - Rating: ${phim.rating}`);
            });
        } else {
            console.log(`Khong co phim nao cua dao dien ${keyword}.`);
        }
    } else {
        console.log("Lua chon khong hop le.");
    }
}

function locPhimTheoTheLoai() {
    let theLoai = prompt("Nhap the loai can loc:").toLowerCase();
    let ketQua = watchlist.filter(phim => phim.genre.toLowerCase() === theLoai);
    if (ketQua.length > 0) {
        console.log(`Phim thuoc the loai ${theLoai}:`);
        ketQua.forEach(phim => {
            console.log(`${phim.id}. ${phim.title} - ${phim.director} (${phim.year}) [${phim.genre}] Rating: ${phim.rating}`);
        });
    } else {
        console.log(`Khong co phim nao thuoc the loai ${theLoai}.`);
    }
}

function tinhDiemTrungBinhWatchlist() {
    if (watchlist.length === 0) {
        console.log("Watchlist trong.");
        return;
    }
    let total = watchlist.reduce((sum, phim) => sum + phim.rating, 0);
    let avg = total / watchlist.length;
    console.log(`Diem trung binh watchlist: ${avg.toFixed(1)}/10 (so luong phim: ${watchlist.length}).`);
}

function sapXepWatchlist() {
    let type = prompt("Sap xep theo nam: 1. Tang dan, 2. Giam dan");
    if (type === "1") {
        watchlist.sort((a, b) => a.year - b.year);
        console.log("Da sap xep tang dan theo nam.");
    } else if (type === "2") {
        watchlist.sort((a, b) => b.year - a.year);
        console.log("Da sap xep giam dan theo nam.");
    } else {
        console.log("Lua chon khong hop le.");
        return;
    }
    hienThiDanhSachPhim();
}

function phanTichWatchlist() {
    let coDien = watchlist.filter(phim => phim.year <= 2000).length;
    let hienDai = watchlist.filter(phim => phim.year > 2000).length;
    console.log(`So luong phim co dien: ${coDien}`);
    console.log(`So luong phim hien dai: ${hienDai}`);
}

function chayChuongTrinh() {
    let isRunning = true;
    while (isRunning) {
        let menu = `
        ---- FAVORITE MOVIES WATCHLIST MANAGER ----
        1. Hien thi danh sach phim
        2. Them phim moi
        3. Xoa phim
        4. Cap nhat thong tin phim
        5. Tim phim (Ten/Dao dien)
        6. Loc phim theo the loai
        7. Tinh diem trung binh
        8. Sap xep theo nam phat hanh
        9. Phan tich xu huong phim
        0. Thoat chuong trinh
        Nhap lua chon cua ban:`;

        let choice = parseInt(prompt(menu));

        switch (choice) {
            case 1:
                hienThiDanhSachPhim();
                break;
            case 2:
                themPhimMoi();
                break;
            case 3:
                xoaPhim();
                break;
            case 4:
                capNhatThongTinPhim();
                break;
            case 5:
                timPhim();
                break;
            case 6:
                locPhimTheoTheLoai();
                break;
            case 7:
                tinhDiemTrungBinhWatchlist();
                break;
            case 8:
                sapXepWatchlist();
                break;
            case 9:
                phanTichWatchlist();
                break;
            case 0:
                console.log("Dang thoat chuong trinh...");
                isRunning = false;
                break;
            default:
                console.log("Lua chon khong hop le, vui long thu lai.");
        }
    }
}

chayChuongTrinh();