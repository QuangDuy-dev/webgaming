window.onload =function() {
    const danhSachNguoiDung = JSON.parse(localStorage.getItem('danhSachNguoiDung') || '[]');
    const bangDuLieu=document.getElementById('danhSachNguoiDung');
    danhSachNguoiDung.forEach(nguoiDung => {
        const hangMoi=document.createElement('tr');
        hangMoi.innerHTML = `
            <td>${nguoiDung.tenDangNhap}</td>
            <td>${nguoiDung.email}</td>
            <td>${nguoiDung.matKhau}</td>
        `;
        bangDuLieu.appendChild(hangMoi);
    });
};