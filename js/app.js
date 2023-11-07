function getItems(elementId) {
  const myItemsString = document.getElementById(elementId).value;
  const item = parseFloat(myItemsString);
  return isNaN(item) ? 0 : item;
}
function calculateSum(item1, item2, item3) {
  return item1 + item2 + item3;
}
document.getElementById("calculate-all").addEventListener("click", function () {
  const income = getItems("income-input");
  const food = getItems("food");
  const rent = getItems("rent");
  const clothes = getItems("chothes");
  if (income === 0 || food === 0 || rent === 0 || clothes === 0) {
    alert("Please enter valid numeric values in all fields.");
    return;
  }
  const sum = calculateSum(food, rent, clothes);
  if (food < 0 || rent < 0 || clothes < 0) {
    alert("Expenses cannot be negative.");
    return;
  }
  const total = income - sum;
  if (total < 0) {
    alert("Expenses cannot exceed income.");
    return;
  }
  let totalExpense = document.getElementById("total-expense");
  totalExpense.innerText = sum;
  let totalBalance = document.getElementById("Balance");
  totalBalance.innerText = total;
});

document.getElementById("saving").addEventListener("click", function () {
  const income = getItems("income-input");
  const percentage = getItems("percentage");

  if (percentage > 100) {
    alert("You cannot save more than 100% of your income.");
    return;
  }

  const resultOfPercentage = ((percentage / 100) * income).toFixed(2);
  const savingAmountElement = document.getElementById("saving-amount");
  savingAmountElement.innerText = resultOfPercentage;
  const savingAmount = parseFloat(resultOfPercentage);
  const totalBalanceElement = document.getElementById("Balance");
  const totalBalance = parseFloat(totalBalanceElement.innerText);
  const remainingBalance = totalBalance - savingAmount;

  if (remainingBalance < 0) {
    alert("You cannot save more than your balance.");
    return;
  }

  const remainingBalanceElement = document.getElementById("Remaining");
  remainingBalanceElement.innerText = remainingBalance.toFixed(2);
});
