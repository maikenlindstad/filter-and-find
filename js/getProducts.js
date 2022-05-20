const url = "https://pawn-products.herokuapp.com/api/products?populate=*";

async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    const productsContainer = document.querySelector(".products-container");

    productsContainer.innerHTML += ``;

    console.log(results);

  } catch (error) {
    console.log(error);
  }
}
getProducts();