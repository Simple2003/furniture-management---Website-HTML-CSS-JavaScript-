function showcart(){
    var a = document.getElementById("showcart");
    if( a.style.display == ""){
        a.style.display = "none";
    } else {
        a.style.display = "";
    }
}
var giohang = new Array();
function addcart(x){
    var getsl = document.getElementById("sl").value;
   // var img=x.parentElement.children[2].src;
    var img=document.getElementById("img").src;
    var tensp=x.parentElement.children[0].innerText;
    var giasp=x.parentElement.children[8].innerText;
    var sl= getsl ;
    var item= new Array(img, tensp, giasp, sl);
    
    console.log(giohang);
    if(sessionStorage.getItem("giohang")){
        giohang=JSON.parse(sessionStorage.getItem("giohang"));
    }
    giohang.push(item);
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
    viewcart();
    hienthiSoSp();
    //showgiohangtrangtt();
}

function countsp(){
    var gh = sessionStorage.getItem("giohang");
    var giohang=JSON.parse(gh);
    //alert(sosp);
    var sospKho1 = 10;
    var sospKho2 = 5;
    var sospKho3 = 6;
    var sospKho4 = 7;
    for (let i = 0; i < giohang.length; i++) {
        if(giohang[i][1] =="Bộ Bàn Ghế Gỗ Hương Đá Tay"){
            var sosp1= sospKho1 - giohang[i][3];
            var slsp1='<table><tr><td><b>' + giohang[i][1] + '</b></td></tr><tr><td><img src="E:\\HTML\\css\\31.PhamVanToan.10121609\\img\\salon-go-cam-lai-10-mon-tay-14-cham-nghe--sl919-1658977321-cfd34c.jpg" style="height: 100px;width: 100px;"></td><td><b>Số sản phẩm: </b></td><td style="color: red">'+sosp1+'</td></tr></table>';
            document.getElementById("soluongsp1").innerHTML=slsp1;
        }
        if(giohang[i][1] =="Tủ Rượu Gỗ Đỏ Cao Cấp"){
            var sosp2= sospKho2 - giohang[i][3];
            var slsp2='<table><tr><td><b>' + giohang[i][1] + '</b></td></tr><tr><td><img src="E:\\HTML\\css\\31.PhamVanToan.10121609\\img\\tu-ruou-go-go-do-goc--tr2027-1654662541-6f7a3b.jpg" style="height: 100px;width: 100px;"></td><td><b>Số sản phẩm: </b></td><td style="color: red">'+sosp2+'</td></tr><table>';
            document.getElementById("soluongsp2").innerHTML=slsp2;
        }
        if(giohang[i][1] =="Giường Gỗ Cổ Điển Kiểu Luis"){
            var sosp3= sospKho3 - giohang[i][3];
            var slsp3='<table><tr><td><b>' + giohang[i][1] + '</b></td></tr><tr><td><img src="E:\\HTML\\css\\31.PhamVanToan.10121609\\img\\giuong-co-dien-kieu-luis-duoi-cach-tan-go-soi--gn1011-1652416697-66600c.jpg" style="height: 100px;width: 100px;"></td><td><b>Số sản phẩm: </b></td><td style="color: red">'+sosp3+'</td></tr><table>';
            document.getElementById("soluongsp3").innerHTML=slsp3;
        }
        if(giohang[i][1] =="Bàn Trang Điểm Cổ Điển"){
            var sosp4= sospKho4 - giohang[i][3];
            var slsp4='<table><tr><td><b>' + giohang[i][1] + '</b></td></tr><tr><td><img src="E:\\HTML\\css\\31.PhamVanToan.10121609\\img\\ban-trang-diem-go-go-do-co-dien--btd1011-1651033255-0008b9.jpg" style="height: 100px;width: 100px;"></td><td><b>Số sản phẩm: </b></td><td style="color: red">'+sosp4+'</td></tr><table>';
            document.getElementById("soluongsp4").innerHTML=slsp4;
}
        }
    }
function viewcart(){
    var gh = sessionStorage.getItem("giohang");
    var tong = 0;
    if(gh!=null){
    var kq='<h2>ĐƠN HÀNG CỦA BẠN</h2>'+
    '<table style="border-collapse:collapse;width:640px" border="1">'+
        '<tr style="background-color:rgb(202, 194, 194);">'+
        '<th>STT</th>'+
        '<th>Hình</th>'+
        '<th>Tên sản phẩm</th>'+
        '<th>Đơn giá</th>'+
        '<th>Số lượng</th>'+
        '<th>Thành tiền</th>'+
        '<th>Thao tác</th>'+
        '</tr>';
    for(let i=0; i<giohang.length; i++){
        let stt=i+1;
        let tt= giohang[i][2] * giohang[i][3];
        var kq;
        tong += tt;
        kq+=
        ' <tr>'+
                '<td>' +stt+ '</td>'+
                '<td><img src="'+giohang[i][0]+'" style="height: 50px;width: 50px;"></td>'+
                '<td>' + giohang[i][1] + '</td>'+
                '<td style="color: red">' + giohang[i][2] + 'đ</td>'+
                '<td><button onclick="tang">+</button>' + giohang[i][3] + '<button>-</button></td>'+
                '<td style="color: red">' + tt + 'đ</td>'+
                '<td><button onclick="xoasp(this)">Xóa</button></td>'+ 
                '</tr>';
        
    }
    kq+='<tr style="background-color:rgb(202, 194, 194);">'+
            '<th colspan="6">Tổng Đơn Hàng</th>'+
            '<th>'+
            '<div style="color: red">'+ tong +'đ</div>'+
            '</th>'+
            '</tr>'+
            '</table>';   
    kq+='<div><a href="E:\\HTML\\css\\31.PhamVanToan.10121609\\html\\dangnhap.html"><button class="buy-now">Thanh Toán</button></a></div>'; }
    else{
        kq='<div style="margin-left:20px;"><h1>Giỏ Hàng Đang Rỗng</h1></div>';
    }
    document.getElementById("showgiohang").innerHTML=kq;
}
function xoasp(x){
    
    console.log(giohang);
    var tr=x.parentElement.parentElement;
    var tensp = tr.children[2].innerText;
    tr.remove();
    for (let i = 0; i < giohang.length; i++) {
        if(giohang[i][1] === tensp){
            giohang.splice(i, 1);
            break;
        }
    }
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
    viewcart();
    hienthiSoSp();
}
function hienthiSoSp(){
    localStorage.setItem('sol', giohang.length);
    let j = localStorage.getItem('sol');
    document.getElementById("demSp").innerHTML = j;
}

function showgiohangtrangtt(){
    var gh = sessionStorage.getItem("giohang");
    var giohang=JSON.parse(gh);
    var tong = 0;
    if(gh!=null){
    var kq=
    '<h2>ĐƠN HÀNG</h2>'+'<table style="border-collapse:collapse;width:670px"" border="1">'+
        '<tr style="background-color:rgb(202, 194, 194);">'+
        '<th>STT</th>'+
        '<th>Hình</th>'+
        '<th>Tên sản phẩm</th>'+
        '<th>Đơn giá</th>'+
        '<th>Số lượng</th>'+
        '<th>Thành tiền</th>'+
        '</tr>';
    for(let i=0; i<giohang.length; i++){
        let stt=i+1;
        let tt= giohang[i][2] * giohang[i][3];
        var kq;
        tong += tt;
        kq+=
        ' <tr style="text-align: center">'+
                '<td>' +stt+ '</td>'+
                '<td><img src="'+giohang[i][0]+'" style="height: 50px;width: 50px;"></td>'+
                '<td id="tensp">' + giohang[i][1] + '</td>'+
                '<td style="color: red">' + giohang[i][2] + 'đ</td>'+
                '<td>' + giohang[i][3] + '</td>'+
                '<td style="color: red" id="tt">' + tt + 'đ</td>'+
                '</tr>';
    }
    kq+='<tr style="background-color:rgb(202, 194, 194);">'+
            '<th colspan="5">Tổng Đơn Hàng</th>'+
            '<th>'+
            '<div style="color: red" id="tong">'+ tong +'đ</div>'+
            '</th>'+
            '</tr>'+
            '</table>';}
    else{
        kq='<div style="margin-left:20px;"><h1>Giỏ Hàng Đang Rỗng</h1></div>';
    }
    document.getElementById("showgiohang2").innerHTML=kq;     
}

var ttnguoinhan= new Array();
function dongydathang(){
    var getten =document.getElementById("ten").value;
    var getque =document.getElementById("que").value;
    var getsdt =document.getElementById("sdt").value;
    var getgmail =document.getElementById("email").value;
    var getykien =document.getElementById("ykien").value;
    var ngay = Date();
    var nguoinhan = new Array(getten, getque, getsdt, getgmail, getykien, ngay);
    console.log(ttnguoinhan);
    if(sessionStorage.getItem("ttnguoinhan")){
        ttnguoinhan=JSON.parse(sessionStorage.getItem("ttnguoinhan"));
    }
    ttnguoinhan.push(nguoinhan);
    sessionStorage.setItem("ttnguoinhan", JSON.stringify(ttnguoinhan));
    if(getten===""){
        alert("Vui Lòng Nhập Thông Tin")
    }
    else{
        alert("Sản phẩm đã được gửi đến ADMIN");
        var out = document.getElementById("from2");
        out.action = "E:\\HTML\\css\\31.PhamVanToan.10121609\\html\\DoAn1.html";
    }
    showttnguoinhan();
}
function showttnguoinhan(){
    var ttnn=sessionStorage.getItem("ttnguoinhan");
    var ttnguoinhan = JSON.parse(ttnn);
    if(ttnn!=null){
        var ttkh='<h1>Thông Tin Khách Hàng</h1>'+
        '<table style="border-collapse:collapse;">';
        for(let i=0; i<ttnguoinhan.length; i++){
            let stt=i+1;
            ttkh+= '<tr>'+
            '<td><b>Khách hàng số:</b> </td>'+
                '<td style="color: red">'+stt+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td><b>Họ Tên: </b></td>'+
                '<td style="color: red" id="ten">'+ttnguoinhan[i][0]+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td><b>Quê Quán: </b></td>'+
                '<td style="color: red">'+ttnguoinhan[i][1]+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td><b>Số Điện Thoại: </b></td>'+
                '<td style="color: red">'+ttnguoinhan[i][2]+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td><b>Gmail: </b></td>'+
                '<td style="color: red">'+ttnguoinhan[i][3]+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td><b>Ý Kiến Của Khách Hàng: </b></td>'+
                '<td style="color: red">'+ttnguoinhan[i][4]+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td><b>Ngày đặt hàng: </b></td>'+
                '<td style="color: red">'+ttnguoinhan[i][5]+'</td>'+
            '</tr>';
        }
    ttkh+='<tr></tr></table>'; 
    }
    else{
        ttkh='<div style="margin-left:20px;"><h1>Thông tin Đang Rỗng</h1></div>';
    }
    document.getElementById("thongtinnhanhang").innerHTML=ttkh;
}
//function xacnhan(){
  // sessionStorage.clear();
  //  alert("Đơn hàng đã được xác nhận");
  //  window.location.href="E:\\HTML\\css\\31.PhamVanToan.10121609\\html\\admin.html";
//}
//function xacnhansl(){
   // var sl1 = document.getElementById("nhapsl").value;
   // localStorage.setItem('value', sl1);
   // ht();
//}
//function ht(){
    //let value = localStorage.getItem("value");
   // document.getElementById("hienthisl").innerHTML = value;
//}

//hienthisodonhang();
var lichsu = new Array();
function xacnhan(){
    //document.getElementById("thongtinnhanhang").style.display = "none";
   // document.getElementById("showgiohang2").style.display = "none";
   // alert("Đơn hàng đã được xác nhận");
  //  var tenkh = document.getElementById("ten").innerText;
  //  var tensp = document.getElementById("tensp").innerText;
   // var giasp = document.getElementById("tt").innerText;
    var tong = document.getElementById("tong").innerText;
    var tongdh = localStorage.getItem('sol');
    var tt = new Array( tong, tongdh);
    console.log(lichsu);
    if(sessionStorage.getItem("lichsu")){
        lichsu=JSON.parse(sessionStorage.getItem("lichsu"));
    }
    lichsu.push(tt);
    sessionStorage.setItem("lichsu", JSON.stringify(lichsu));
    alert("Đơn Hàng Đã Được Xác Nhận");
    window.location.href = "E:\\HTML\\css\\31.PhamVanToan.10121609\\html\\admin2.html";
    hienthisodonhang();
    showlichsu();
}
function showlichsu(){
    var ls = sessionStorage.getItem("lichsu");
    var lichsu = JSON.parse(ls);
    if(ls!=null){
    var kq=
    '<table style="border-collapse:collapse;width:640px" border="1">'+
        '<tr style="background-color:rgb(202, 194, 194);">'+
        '</tr>';
    for(let i=0; i<lichsu.length; i++){
        var kq;
        kq+=
        ' <tr>'+
                '<td style="color: red"><h2>Doanh Thu : ' + lichsu[i][0] + '</h2></td>'+
                '</tr>'+
                '<tr style="margin-left:40px"><h2>Tổng Số Đơn Hàng Trong Ngày: '+lichsu[i][1]+'<h2></tr>';
    }
}
    else{
        kq='<div style="margin-left:20px;"><h1>Không có đơn hàng</h1></div>';
    }
       
    document.getElementById("danhsach").innerHTML=kq;
}
function resert(){
    sessionStorage.clear();
    alert("Đơn Hàng Đã Được Làm Mới");
    window.location.href="";
}