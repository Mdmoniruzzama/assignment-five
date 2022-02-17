function getValue(id) {
  const inputValue = document.getElementById(id);
  if (isNaN(inputValue.value) || inputValue.value < 0) {
    alert(`${id} Amount is incoret`);
    return "error";
  } else if (inputValue.value == "") {
    return 0;
  } else {
    return parseFloat(inputValue.value);
  }
}
function updateBalance() {
  // get input Value
  const incomeValue = getValue("income");
  const foodValue = getValue("food");
  const rentValue = getValue("rent");
  const clothesValue = getValue("clothes");
  const totalExpenses = foodValue + rentValue + clothesValue;
  //   Update Balance
  if (
    !(
      incomeValue == "error" ||
      foodValue == "error" ||
      rentValue == "error" ||
      clothesValue == "error"
    )
  ) {
    // update expenses, Balance
    document.getElementById("total-expenses").innerText = totalExpenses;
    const balance = incomeValue - totalExpenses;
    if (balance < 0) {
      alert("Please Decrease expenses");
      document.getElementById("total-balance").innerText = balance;
      document.getElementById("remaining-balance").innerText = balance;
    } else {
      document.getElementById("total-balance").innerText = balance;
      document.getElementById("remaining-balance").innerText = balance;
    }
  }
}
// Function for calculate saving Amount
function calculateSaving() {
  const income = getValue("income");
  const parsentage = getValue("saving-parsentage");
  const savingAmount = (income * parsentage) / 100;
  const balance = parseFloat(
    document.getElementById("total-balance").innerText
  );
  if (!(income == "error" || parsentage == "error")) {
    if (savingAmount > balance) {
      alert("Please decrease saving Balance");
    } else {
      // Update Saving Amount & Remaining Balance
      document.getElementById("saving-amount").innerText = savingAmount;
      document.getElementById("remaining-balance").innerText =
        balance - savingAmount;
    }
  }
}

document
  .getElementById("calculate-expenses")
  .addEventListener("click", function () {
    updateBalance();
  });

document
  .getElementById("saving-claculate")
  .addEventListener("click", function () {
    calculateSaving();
  });
