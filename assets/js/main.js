// ecommerce-fe/assets/js/main.js
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { fetchProducts } from './modules/product.js';

document.addEventListener('DOMContentLoaded', async () => {
  renderNavbar();
  renderFooter();

  const productList = document.getElementById('product-list');
  const products = await fetchProducts();

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price} VNĐ</p>
      <a href="./product-detail.html?id=${product.id}">Xem chi tiết</a>
    `;
    productList.appendChild(productCard);
  });
});
