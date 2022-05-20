
export function renderProducts(productsToRender) {
  const productContainer = document.querySelector(".products-container");

  productContainer.innerHTML = "";

  productsToRender.data.forEach(function (product) {
    productContainer.innerHTML += `
    <div class="product">
      <div style="background-image: url(""); width: 220px; height: 100px;">
        <img src="${productsToRender.data[0].attributes.image.data[0].attributes.url}" style="width: 100px;">
      </div>
      <div>
        <h2>${productsToRender.data[0].attributes.title}</h2>
        <p>Price ${productsToRender.data[0].attributes.price},-</p>
      </div>
    </div>`;
  });
}