function themVaoGioHang(nutMua) {
    const sanPham=nutMua.parentElement;
    const tenSanPham=sanPham.querySelector('h2').innerText;
    const giaSanPham=parseInt(sanPham.querySelector('#class2').innerText.replace(/\D/g,''));
    
 
    let gioHang=JSON.parse(localStorage.getItem('gioHang')) || [];
    
   
    const sanPhamDaCo=gioHang.findIndex(item => item.ten === tenSanPham);
    
    if (sanPhamDaCo!==-1) {
     
        gioHang[sanPhamDaCo].soLuong++;
    } else {
   
        gioHang.push({
            ten: tenSanPham,
            gia: giaSanPham,
            soLuong: 1
        });
    }
    
 
    localStorage.setItem('gioHang', JSON.stringify(gioHang));
    

    const tongSoLuong=gioHang.reduce((tong, item) => tong+item.soLuong,0);
    document.getElementById('cartCount').textContent = tongSoLuong;
    
    alert('Đã thêm sản phẩm vào giỏ hàng!');
}


window.onload=function(){
    const nutMuaHang=document.querySelectorAll('.btn-outline-primary');
    nutMuaHang.forEach(nut=>{
        nut.onclick=function(){
            themVaoGioHang(this);
        };
    });

  
    const gioHang=JSON.parse(localStorage.getItem('gioHang'))||[];
    const tongSoLuong=gioHang.reduce((tong,item) => tong+item.soLuong, 0);
    document.getElementById('cartCount').textContent=tongSoLuong;
};