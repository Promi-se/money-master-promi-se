function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    console.log(amountValue);
    return amountValue;

}// update and calculate total expense
function addExpensesAmount(amount1, amount2, amount3){
    const totalExpenseAmount = amount1 + amount2 + amount3;
    console.log(totalExpenseAmount);
    document.getElementById('total-expenses').innerText = totalExpenseAmount
    return totalExpenseAmount; 
}

// update and calculate balance
function addBalanceAmount(amountOne, amountTwo){
    const totalBalance = amountOne - amountTwo;
    console.log(totalBalance)
    document.getElementById('total-balance').innerText = totalBalance;
    return totalBalance;
}


document.getElementById('calc-btn').addEventListener('click', function(){
    const foodAmount = getInputValue('food-input');
    const rentAmount = getInputValue('rent-input');
    const clothsAmount = getInputValue('cloths-input');
    const incomeAmount = getInputValue('income-input');
    const totalExpenses = addExpensesAmount(foodAmount, rentAmount, clothsAmount);
    const balanceAmount = addBalanceAmount(incomeAmount, totalExpenses);
})

// // add event listener to Calculate Button
// document.getElementById('calc-btn').addEventListener('click', function(){
//     // handle food input
//     const foodInput = document.getElementById('food-input');
//     const foodInputText = foodInput.value;
//     const foodExpense = parseFloat(foodInputText);

//     // handle rent input
//     const rentInput = document.getElementById('rent-input');
//     const rentExpenseText = rentInput.value;
//     const rentExpense = parseFloat(rentExpenseText);
//     // handle cloths input

//     const clothsInput = document.getElementById('cloths-input');
//     const clothsInputText = clothsInput.value;
//     const clothsExpense = parseFloat(clothsInputText);

//     // calculate all the expenses
//     const additionResult = foodExpense +  rentExpense + clothsExpense;

//     // update total expenses
//     const totalExpenses = document.getElementById('total-expenses');
//     const totalExpensesText = totalExpenses.innerText;
//     const previousExpensesAmount = parseFloat(totalExpensesText);
//     totalExpenses.innerText = previousExpensesAmount + additionResult;

//     // handle income input 
//     const incomeInput = document.getElementById('income-input');
//     const incomeInputText = incomeInput.value
//     const incomeAmount = parseFloat(incomeInputText);

//     // update balance
//     const totalBalance = document.getElementById('total-balance');
//     const totalBalanceText = totalBalance.innerText;
//     const previousBalanceAmount = parseFloat(totalBalanceText);
//     console.log(previousBalanceAmount);
//     totalBalance.innerText = previousBalanceAmount + incomeAmount - totalExpenses.innerText;

//     // foodInput.value = '';
//     // rentInput.value = '';
//     // clothsInput.value = '';
// });


// // add event listener to Save button
// document.getElementById('save-btn').addEventListener('click', function(){
//     // handle save input
//     const saveInput = document.getElementById('save-input');
//     const saveInputText = saveInput.value;
//     const savePercentage = parseFloat(saveInputText);
 
//     // total balance
//     const totalBalance = document.getElementById('total-balance');
//     const totalBalanceText = totalBalance.innerText;
//     const previousBalanceAmount = parseFloat(totalBalanceText);

//     // update saving amount
//     const savingAmount = document.getElementById('saving-amount');
//     const savingAmountText = savingAmount.innerText;
//     const previousSavingAmount = parseFloat(savingAmountText);
//     savingAmount.innerText = savingAmount.innerText + totalBalance.innerText / saveInput.value;

//     // update remaining balance
//     const remainingBalance = document.getElementById('remaining-balance');
//     const remainingBalanceText = remainingBalance.innerText;
//     const remainingBalanceAmount = parseFloat(remainingBalanceText);
//     remainingBalance.innerText = totalBalance.innerText - savingAmount.innerText;
// })
