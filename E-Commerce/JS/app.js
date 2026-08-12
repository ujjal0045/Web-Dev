let cartItems = []; 
onLoad();

function onLoad(){
  displayProducts(products);
  displayCartIcon();
}

function addToCart(productId){
  cartItems.push(productId);
  localStorage.setItem('Id',JSON.stringify(cartItems));
  displayCartIcon();
}

function displayCartIcon(){
  let CartCount = document.querySelector('#cartCount');
  if(cartItems.length > 0){
    CartCount.style.visibility = 'visible';
    CartCount.innerHTML = cartItems.length;
  }
  else{
    CartCount.style.visibility='hidden';
  }
}



function displayProducts(productsToDisplay) {

    productsContainer.innerHTML = "";

    productsToDisplay.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `

            <a href="./product.html?id=${product.id}" class="product-link">

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <span class="discount">
                        ${product.discount}% OFF
                    </span>

                </div>

                <div class="product-info">

                    <p class="product-category">
                        ${product.category}
                    </p>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <div class="product-rating">
                        <span class="rating">★</span>
                        <span>${product.rating}</span>
                    </div>

                    <div class="product-price">

                        <span class="current-price">
                            ₹${product.price}
                        </span>

                        <span class="original-price">
                            ₹${product.originalPrice}
                        </span>

                    </div>

                </div>

            </a>

            <button
                class="add-cart-btn"
                onclick="addToCart(${product.id})"
            >
                Add to Cart
            </button>
        `;

        productsContainer.appendChild(card);
    });
}