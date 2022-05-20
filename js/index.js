const url = "https://pawn-products.herokuapp.com/api/products?populate=*";

async function getProducts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    const productContainer = document.querySelector(".products-container");
    const search = document.querySelector(".search");

    function renderProducts() {
      productContainer.innerHTML = "";

      json.data.forEach(function (product) {
        productContainer.innerHTML += `
          <div class="product">
            <div style="background-image: url(""); width: 220px; height: 100px;">
              <img src="${json.data[0].attributes.image.data[0].attributes.url}" style="width: 100px;">
            </div>
            <div>
              <h2>${json.data[0].attributes.title}</h2>
              <p>Price ${json.data[0].attributes.price},-</p>
            </div>
          </div>`;
      });
    } renderProducts();

    search.onkeyup = function () {

      const searchValue = event.target.value.trim().toLowerCase();
      //I'm having an issue with this one
      //"products". I know that it needs to get json.data[0].attributes and THEN title, 
      //not just "products"
      const filteredProducts = products.filter(function (product) {
        if (product.title.toLowerCase().startsWith(searchValue)) {
          return true;
        }
      });
    };
  } catch (error) {
    console.log(error);
  }
}
getProducts();