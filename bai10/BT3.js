function click1(number){
    document.getElementById('nhap').value += number ;
}
function clearDisplay() {
    document.getElementById('nhap').value = '';
}
function bang() {
    let value = document.getElementById('nhap').value;
    document.getElementById('nhap').value = eval(value);
}
