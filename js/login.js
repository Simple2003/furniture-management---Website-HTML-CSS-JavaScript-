
function singup(e){
    event.preventDefault();
    var usename = document.getElementById("tk").value;
    var passwor = document.getElementById("matkhau").value;
    var user = {
        usename : usename,
        passwor : passwor,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(usename, json);
    alert("Đăng ký thành công");
}
function login(e){
    event.preventDefault();
    var usename = document.getElementById("tk").value;
    var passwor = document.getElementById("matkhau").value;
    var user = localStorage.getItem(usename);
    var data = JSON.parse(user);
    if(usename.trim().length === 0){
        alert("Vui lòng nhập tài khoản và mật khẩu")
    }
    else if(usename == data.usename && passwor == data.passwor){
        alert("Đăng nhập thành công")
        window.location.href="E:\\HTML\\css\\31.PhamVanToan.10121609\\html\\GioHang.html"
    }
    else{
        alert("Đăng nhập thất bại")
    }
}
function dkdn(){
    var tk = document.form.tk.value;
    var matkhau = document.form.matkhau.value;
    var dangnhap = document.getElementById("dangnhap");
    if(tk == "admin" && matkhau == "admin"){
        alert("Hello my boss!!");
        window.location.href="E:\\HTML\\css\\31.PhamVanToan.10121609\\html\\admin.html"
    }
}
