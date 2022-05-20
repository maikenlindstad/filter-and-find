// const url = "https://pawn-products.herokuapp.com/api/products?populate=*";

// async function getProducts() {
//   try {
//     const response = await fetch(url);
//     const results = await response.json();
//     const productsContainer = document.querySelector(".products-container");
//     productsContainer.innerHTML = "";
//     results.data.forEach(function (product) {
//       productsContainer.innerHTML += `
//         <div class="product">
//           <img src="${product.attributes.image.data[0].attributes.url}" style="width: 100px; ">
//           <h2>${product.attributes.title}</h2>
//         </div>`;
//     });
//     searchProducts(results);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getProducts();
// const search = document.querySelector(".search");
// function searchProducts(products) {
//   search.onkeyup = () => {
//     const searchValue = event.target.value.trim().toLowerCase();
//     const filteredProducts = products.data.filter(function (product) {
//       if (product.attributes.title.toLowerCase().startsWith(searchValue)) {
//         return true;
//       }
//     });
//     filteredProducts.forEach(product => {
//       console.log(product.attributes.title)
//     });
//     // renderProducts(filteredProducts);
//   };
// }