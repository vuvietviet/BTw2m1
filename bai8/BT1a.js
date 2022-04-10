let ly = Number(prompt('Nhập điểm Lý: '));
let hoa = Number(prompt('Nhập điểm Hoá: '));
let sinh = Number(prompt('Nhập điểm Sinh: '));
let sum = ly + hoa + sinh;
let avg = sum/3;
document.writeln('Tổng là: ' + sum);
document.writeln('Điểm trung bình là: ' + avg);