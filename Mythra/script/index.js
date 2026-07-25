
let bagItems = [];

onLoad();

function onLoad(){
  bagItemstr = localStorage.getItem('bagItems');
  bagItems = bagItemstr ? JSON.parse(bagItemstr) : [];
  displayItemHomePage();
  displayBagIcon();
}


function addToBag(item){
  bagItems.push(item);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagItems.length > 0){
    bagItemCountElement.style.visibility ='visible'
    bagItemCountElement.innerText = bagItems.length;
  }
  else{
    bagItemCountElement.style.visibility ='hidden';
  }
}

function displayItemHomePage(){
  let itemsContainer = document.querySelector('.items-container');
  if(!itemsContainer){
    return;
  }
  let innerHTML ='';
items.forEach(item => {
  innerHTML += `
  <div class="item-container">
                <img class="item-image" src="${item.image}" alt="">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price"> RS ${item.current_price}</span>
                    <span class="orginal-price">RS ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag('${item.id}')">Add to bag</button>
            </div>`
});

  itemsContainer.innerHTML= innerHTML;
}



