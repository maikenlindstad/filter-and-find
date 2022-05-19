import { products } from "./api/api.js";

const productContainer = document.querySelector(".products-container");
const search = document.querySelector(".search");

let productsToRender = products;

productsToRender.forEach(function (product) {
  productContainer.innerHTML += `
  <div class="product">
    <h2>${product.data[0].attributes.title}</h2>
  </div>`;
});
