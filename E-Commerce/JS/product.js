// isme url sa ? iska baad ka data liya gya hai
const params = new URLSearchParams(window.location.search);

// isline sa url sa id number nikale
const productId = Number(params.get("id"));

console.log(productId);
// issa hum us exact product detail find kiya or usko prduct me store kiya
const product = products.find(item => item.id === productId);

console.log(product);

function onLoad(){
  displayProduct();
}

onLoad();

function displayProduct(){
  const productContainer = document.querySelector('.product-page');

  let innerHTML = "";
  innerHTML = `
    <!-- Product Image -->

        <div class="product-image-container">

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
            >

        </div>


        <!-- Product Details -->

        <div class="product-details">

            <p class="product-category">
                ${product.category} · NEW ARRIVAL
            </p>

            <h1 class="product-name">
                ${product.name}
            </h1>


            <!-- Rating -->

            <div class="product-rating">

                <span class="stars">
                    ★★★★★
                </span>

                <span class="rating">
                    ${product.rating}
                </span>

                <span class="reviews">
                    · 18 reviews
                </span>

            </div>


            <!-- Price -->

            <div class="product-price">

                <span class="current-price">
                    ₹${product.price}
                </span>

                <span class="original-price">
                    ₹${product.originalPrice}
                </span>

            </div>


            <!-- Description -->

            <p class="product-description">
                ${product.description}
            </p>


            <!-- Stock -->

            <div class="stock-section">

                <p class="stock-title">
                    Select Quantity
                </p>

                <div class="quantity-container">

                    <button class="quantity-btn active">
                        1
                    </button>

                    <button class="quantity-btn">
                        2
                    </button>

                    <button class="quantity-btn">
                        3
                    </button>

                    <button class="quantity-btn">
                        4
                    </button>

                </div>

                <p class="stock-text">
                    ${product.stock} items available
                </p>

            </div>


            <!-- Actions -->

            <div class="product-actions">

                <button class="add-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

                <button class="wishlist-btn">
                    ♡
                </button>

            </div>

        </div>

  `;
  productContainer.innerHTML = innerHTML;

}