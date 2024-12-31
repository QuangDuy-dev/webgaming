
function capNhatSoLuongGioHang(){
    const gioHang=JSON.parse(localStorage.getItem('gioHang')) || [];
    const tongSoLuong=gioHang.reduce((tong, item) => tong+item.soLuong, 0);
    document.getElementById('cartCount').textContent=tongSoLuong;
}function hienThiGioHang(){
    const danhSachGioHang=document.getElementById('danhSachGioHang');
    const gioHang=JSON.parse(localStorage.getItem('gioHang'))|| [];
    let tongTien=0;

    danhSachGioHang.innerHTML= '';
    gioHang.forEach((sanPham, index) => {
        const thanhTien = sanPham.gia * sanPham.soLuong;
        tongTien+=thanhTien;

        const sanPhamHTML= `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${sanPham.ten}</h5>
                    <p class="card-text">
                        Giá: ${sanPham.gia.toLocaleString()}đ<br>
                        Số lượng: 
                        <button onclick="giamSoLuong(${index})" class="btn btn-sm btn-secondary">-</button>
                        <span>${sanPham.soLuong}</span>
                        <button onclick="tangSoLuong(${index})" class="btn btn-sm btn-secondary">+</button>
                    </p>
                    <p>Thành tiền: ${thanhTien.toLocaleString()}đ</p>
                    <button onclick="xoaSanPham(${index})" class="btn btn-danger">Xóa</button>
                </div>
            </div>
        `;
        danhSachGioHang.innerHTML+=sanPhamHTML;
    });

    document.getElementById('tongTien').textContent = tongTien.toLocaleString();
}function tangSoLuong(index){
    const gioHang=JSON.parse(localStorage.getItem('gioHang')) ||[];
    gioHang[index].soLuong++;
    localStorage.setItem('gioHang',JSON.stringify(gioHang));
    hienThiGioHang();
    capNhatSoLuongGioHang();
}


function giamSoLuong(index){
    const gioHang=JSON.parse(localStorage.getItem('gioHang')) || [];
    if (gioHang[index].soLuong > 1) {
        gioHang[index].soLuong--;
        localStorage.setItem('gioHang',JSON.stringify(gioHang));
        hienThiGioHang();
        capNhatSoLuongGioHang();
    }
}
function xoaSanPham(index){
    const gioHang= JSON.parse(localStorage.getItem('gioHang')) || [];
    gioHang.splice(index, 1);
    localStorage.setItem('gioHang',JSON.stringify(gioHang));
    hienThiGioHang();
    capNhatSoLuongGioHang();
}
function xoaGioHang(){
    localStorage.removeItem('gioHang');
    hienThiGioHang();
    capNhatSoLuongGioHang();
}
function thanhToan(){
    alert('Cảm ơn bạn đã mua hàng!');
    xoaGioHang();
}
window.onload =function(){
    hienThiGioHang();
    capNhatSoLuongGioHang();
};

