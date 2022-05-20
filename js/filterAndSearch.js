const url = "https://pawn-products.herokuapp.com/api/products?populate=*";

const productsContainer = document.querySelector(".products-container");
const search = document.querySelector(".search");

// let productsToRender = products;
// let productsToRender = [];

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


    function searchProducts(products) {

      search.onkeyup = () => {

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProducts = products.data.filter(function (product) {
          if (product.attributes.title.toLowerCase().startsWith(searchValue)) {
            return true;
          }
        });

        console.log(filteredProducts);

        filteredProducts.forEach(product => {
          console.log(product.attributes.title);

          productsContainer.innerHTML = "";

          renderProducts();

          productsContainer.innerHTML += `
            <div class="product">
              <img src="${product.attributes.image.data[0].attributes.url}" style="width: 100px; ">
              <h2>${product.attributes.title}</h2>
            </div>`;
        });

        // renderProducts(filteredProducts);

      };

    }
    renderProducts(results);

    searchProducts(results);


  } catch (error) {
    console.log(error);
  }
}
renderProducts();