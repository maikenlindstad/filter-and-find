const url = "https://pawn-products.herokuapp.com/api/products?populate=*";

const productsContainer = document.querySelector(".products-container");
const search = document.querySelector(".search");

// let productsToRender = products;

async function renderProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    productsContainer.innerHTML = "";


    // results.data instead of teamsToRender
    results.data.forEach(function (product) {
      productsContainer.innerHTML += `
        <div class="product">
          <img src="${product.attributes.image.data[0].attributes.url}" style="width: 100px; ">
          <h2>${product.attributes.title}</h2>
        </div>`;
    });

    searchProducts(results);

  } catch (error) {
    console.log(error);
  }
}
renderProducts();

function searchProducts(products) {

  search.onkeyup = () => {
    // console.log(event);

    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = products.data.filter(function (product) {
      if (product.attributes.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    console.log(filteredProducts);

    renderProducts();

    filteredProducts.forEach(product => {
      console.log(product.attributes.title)
      // renderProducts();

      productsContainer.innerHTML = "";

      productsContainer.innerHTML += `
        <div class="product">
          <img src="${product.attributes.image.data[0].attributes.url}" style="width: 100px; ">
          <h2>${product.attributes.title}</h2>
        </div>`;
    });
    renderProducts(filteredProducts);
  };
}