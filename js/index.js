document.getElementById('calculate').addEventListener('click', function () {
    //income 
    const myincomeInput = document.getElementById('input-income');
    const incomeAmount = myincomeInput.value;

    //food
    const foodcostInput = document.getElementById('food-income');
    const foodAmount = foodcostInput.value;

    //rentcost
    const myrentInput = document.getElementById('rent-income');
    const rentAmount = myrentInput.value;

    //clothcost
    const clothInput = document.getElementById('clothes-income');
    const clothAmount = clothInput.value;

    //total
    const expenses = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothAmount);
    const mytotalExpenses = document.getElementById('Expenses-amount');
    mytotalExpenses.innerText = expenses;

    const balance = parseFloat(incomeAmount) - parseFloat(expenses);
    const ourtotalbalance = document.getElementById('Balance-amount');
    ourtotalbalance.innerText = balance;
});