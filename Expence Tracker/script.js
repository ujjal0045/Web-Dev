const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const date = document.getElementById('date');
const type = document.getElementById('type');
const category = document.getElementById('category');

const localStorageKey = 'expenseTrackerTransactions';
let transactions = JSON.parse(localStorage.getItem(localStorageKey)) || [];

function generateID() {
  return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  item.innerHTML = `
    <div class="transaction-details">
      <div class="transaction-main">
        <strong>${transaction.description}</strong>
        <span class="transaction-meta">${transaction.date} · ${transaction.category} · ${transaction.type}</span>
      </div>
      <div class="transaction-value">
        <span>${sign}₹${Math.abs(transaction.amount).toFixed(2)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
      </div>
    </div>
  `;

  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);

  balance.innerText = `₹${total.toFixed(2)}`;
  moneyPlus.innerText = `+₹${income.toFixed(2)}`;
  moneyMinus.innerText = `-₹${Math.abs(expense).toFixed(2)}`;
}

function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  updateLocalStorage();
  init();
}

function updateLocalStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify(transactions));
}

function addEmptyState() {
  const emptyItem = document.createElement('li');
  emptyItem.classList.add('empty-state');
  emptyItem.innerHTML = `
    <div>
      <p>No transactions yet.</p>
      <small>Add income or expense to see history here.</small>
    </div>
  `;
  list.appendChild(emptyItem);
}

function init() {
  list.innerHTML = '';
  if (transactions.length === 0) {
    addEmptyState();
  } else {
    transactions.forEach(addTransactionDOM);
  }
  updateValues();
}

function clearFields() {
  text.value = '';
  amount.value = '';
  date.value = '';
  type.value = 'expense';
  category.value = '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const description = text.value.trim();
  const amountValue = parseFloat(amount.value.trim());
  const transactionDate = date.value;
  const transactionType = type.value;
  const transactionCategory = category.value;

  if (
    description === '' ||
    isNaN(amountValue) ||
    amountValue === 0 ||
    transactionDate === '' ||
    transactionCategory === '' ||
    transactionCategory === null
  ) {
    alert('Please fill in all fields and enter a non-zero amount.');
    return;
  }

  const signedAmount = transactionType === 'expense' ? -Math.abs(amountValue) : Math.abs(amountValue);

  const transaction = {
    id: generateID(),
    description,
    amount: signedAmount,
    date: transactionDate,
    type: transactionType,
    category: transactionCategory,
  };

  transactions.push(transaction);
  updateLocalStorage();
  init();
  clearFields();
});

init();