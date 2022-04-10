function doiTien() {
    let tien1 = document.getElementById('amount').value;
    let menhgia1 = document.getElementById('Fcurrency').value;
    let menhgia2 = document.getElementById('Tcurrency').value;
    let tigia = menhgia1/menhgia2;
    alert('Result: ' + tien1*tigia);
}