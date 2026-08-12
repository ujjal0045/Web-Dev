let productsItem = JSON.parse(localStorage.getItem("Id")) || [];

const container = document.querySelector(".container");

console.log(productsItem);


onLoad();


function onLoad() {

    checkData();
    displayCartIcon();

}


function displayCartIcon(){
  let CartCount = document.querySelector('#cartCount');
  if(productsItem.length > 0){
    CartCount.style.visibility = 'visible';
    CartCount.innerHTML = productsItem.length;
  }
  else{
    CartCount.style.visibility='hidden';
  }
}


function checkData() {

    if (productsItem.length === 0) {

        showEmptyState();

    } else {

        displayResult();

    }

}


function showEmptyState() {

    container.innerHTML = `

        <div class="empty-cart">

            <div class="empty-cart-icon">
                ♢
            </div>

            <h2>Your cart is waiting</h2>

            <p>
                Save favorites and come back whenever you’re ready.
            </p>

        </div>

    `;

}


function removeFromCart(id){
    let updateProductItem = productsItem.filter(item => item !== id);
    localStorage.setItem("Id", JSON.stringify(updateProductItem));
    productsItem = updateProductItem;
    checkData();
    displayCartIcon();
    console.log(updateProductItem);
}


function displayResult() {

    let original = 0;
    let finalPrice = 0;

    let cartProducts = products.filter(product =>
        productsItem.includes(product.id)
    );

    console.log(cartProducts);

    let cartHTML = `
        <div class="product-container">

            <div class="heading">
                <h1>Your cart</h1>
            </div>
    `;

    cartProducts.forEach(item => {

      original += item.originalPrice;
      finalPrice += item.price;

        cartHTML += `
            <div class="result">

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${item.id})"
                    title="Remove product"
                >
                    &times;
                </button>

                <div class="image-container">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>

                <div class="proDetail">

                    <h4 class="product-Name">
                        ${item.name}
                    </h4>

                    <h6 class="product-category">
                        ${item.category}
                    </h6>

                    <p class="originialPrize">
                        ₹${item.originalPrice}
                    </p>

                </div>

            </div>
        `;

    });


    cartHTML += `
        </div>

        <div class="productDetails">

            <h3>Order Summary</h3>

            <p>
                Product Price :
                <span>₹ ${original}</span>
            </p>

            <p>
                Total Discount :
                <span>₹${original - finalPrice}</span>
            </p>

            <p>
                Delivery Fee:
                <span>Free</span>
            </p>

            <hr>

            <p>
                Final Price:
                <span>₹${finalPrice}</span>
            </p>

            <button>
                Proceed to Checkout
            </button>

        </div>
    `;


    container.innerHTML = cartHTML;
}