
function tong() {
    let so1 = document.getElementById('s1').value;
    let so2 = document.getElementById('s2').value;
    let cong = parseInt(so1) + parseInt(so2);
    alert('Result Addition: ' + cong);
}
function hieu() {
    let so1 = document.getElementById('s1').value;
    let so2 = document.getElementById('s2').value;
    let tru = so1 - so2;
    alert('Result Subtration: ' + tru);
}
function tich() {
    let so1 = document.getElementById('s1').value;
    let so2 = document.getElementById('s2').value;
    let nhan = so1*so2;
    alert('Result Multiplication: ' + nhan);
}
function thuong() {
    let so1 = document.getElementById('s1').value;
    let so2 = document.getElementById('s2').value;
    let chia = so1/so2;
    alert('Result Division ' + chia);
}