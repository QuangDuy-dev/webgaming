function xuLyDangKy(sukien) {
    sukien.preventDefault();

    const tenDangNhap=document.getElementById('tenDangNhap').value;
    const email=document.getElementById('email').value;
    const matKhau=document.getElementById('matKhau').value;
    const xacNhanMatKhau=document.getElementById('xacNhanMatKhau').value;
    if (matKhau !== xacNhanMatKhau) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }
    const thongTinNguoiDung = {
        tenDangNhap: tenDangNhap,
        email: email,
        matKhau: matKhau,
    };
    let danhSachNguoiDung=JSON.parse(localStorage.getItem('danhSachNguoiDung') || '[]');
    danhSachNguoiDung.push(thongTinNguoiDung);
    localStorage.setItem('danhSachNguoiDung', JSON.stringify(danhSachNguoiDung));
    window.location.href='./trangchudadangnhap.html';
}