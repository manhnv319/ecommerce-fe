export async function fetchProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      return await res.json();
    } catch (err) {
      console.error('Lỗi khi load sản phẩm:', err);
      return [];
    }
  }
  