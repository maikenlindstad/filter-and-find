const url = "https://pawn-products.herokuapp.com/api/products?populate=*";
const productsContainer = document.querySelector(".products-container");
const search = document.querySelector(".search");

let products = [];

/**
 * Gets data from the API
 * @param {string} url 
 * @returns
 */

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;

  } catch (error) {
    console.log(error);
  }
}

function renderProducts(productsList) {
  productsContainer.innerHTML = "";

  productsList.forEach(function (product) {
    productsContainer.innerHTML += `
    <div class="product">
      <img src="${product.attributes.image.data[0].attributes.url}" style="width: 100px; ">
      <h2>${product.attributes.title}</h2>
    </div>`;
  });
}


function addSearchLookahead() {
  search.onkeyup = function () {
    const searchValue = event.target.value.trim().toLowercase();
    console.log(search);
    const filteredProducts = products.filter(function (product) {
      if (product.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
  };
}



async function main() {
  const productsData = await getProducts(url);
  products = productsData.data;
  renderProducts(products);
  addSearchLookahead();
}

main();