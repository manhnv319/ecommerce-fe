export function renderNavbar() {
    document.getElementById('navbar').innerHTML = `
    <nav class="navbar">
        <a href="./index.html">Trang chủ</a>
        <a href="./product.html">Sản phẩm</a>
        <a href="./cart.html">Liên hệ</a>
        <a href="./login.html">Đăng nhập</a>
    </nav>
    `;
}