function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    console.log(amountValue);

      // error message
    const stringError = document.getElementById('string-error');
    const negativeNumber = document.getElementById('negative-number');
    if(inputField.value < 0){
        negativeNumber.style.display = 'block';
    }
    if(isNaN(inputField.value) == true){
        stringError.style.display = 'block';
    }
    
    return amountValue;
};
// update and calculate total expense
function addExpensesAmount(amount1, amount2, amount3){
    const totalExpenseAmount = amount1 + amount2 + amount3;
    console.log(totalExpenseAmount);
    document.getElementById('total-expenses').innerText = totalExpenseAmount;

       // error message bonus 
    const incomeAmount = getInputValue('income-input');
    const totalExpensesError = document.getElementById('totalExpenses-error');
    if(incomeAmount < totalExpenseAmount) {
        totalExpensesError.style.display = 'block';
    }

    return totalExpenseAmount; 
};

// update and calculate balance
function addBalanceAmount(amountOne, amountTwo){
    const totalBalance = amountOne - amountTwo;
    console.log(totalBalance)
    document.getElementById('total-balance').innerText = totalBalance;
    return totalBalance;
};

// update and calculate saving amount
function updateSavingAmount(amount, percentAmount){
    const totalSavingAmount = amount * (percentAmount / 100);
    document.getElementById('saving-amount').innerText = totalSavingAmount;
    return totalSavingAmount;
};

// update and calculate remaining balance
function updateRemainingBalance(totalAmount1, totalAmount2){
    const totalRemainingBalance = totalAmount1 - totalAmount2;
    document.getElementById('remaining-balance').innerText = totalRemainingBalance;
};


// handle Calculate button
document.getElementById('calc-btn').addEventListener('click', function(){
    const foodAmount = getInputValue('food-input');
    const rentAmount = getInputValue('rent-input');
    const clothsAmount = getInputValue('cloths-input');
    const incomeAmount = getInputValue('income-input');
    const totalExpenses = addExpensesAmount(foodAmount, rentAmount, clothsAmount);
    const balanceAmount = addBalanceAmount(incomeAmount, totalExpenses);
});


// handle Save button
document.getElementById('save-btn').addEventListener('click', function(){
    const saveInput = getInputValue('save-input');
    const incomeAmount = getInputValue('income-input');
    const foodAmount = getInputValue('food-input');
    const rentAmount = getInputValue('rent-input');
    const clothsAmount = getInputValue('cloths-input');
    const totalExpenses = addExpensesAmount(foodAmount, rentAmount, clothsAmount);
    const balanceAmount = addBalanceAmount(incomeAmount, totalExpenses);
    const savingAmount = updateSavingAmount(incomeAmount, saveInput); 
    const remainingBalance = updateRemainingBalance(balanceAmount, savingAmount);

      // error message bonus
    const savingAmountError = document.getElementById('savingAmount-error');
    if(savingAmount > balanceAmount) {
        savingAmountError.style.display = 'block';
    }
});