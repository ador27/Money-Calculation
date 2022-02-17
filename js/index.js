document.getElementById('calculate-button').addEventListener('click', function () {
    //income 
    const myincomeInput = document.getElementById('myincome-input');
    const incomeAmount = myincomeInput.value;

    //food
    const foodcostInput = document.getElementById('myfoodcost-input');
    const foodAmount = foodcostInput.value;

    //rentcost
    const myrentInput = document.getElementById('rentcost-input');
    const rentAmount = myrentInput.value;

    //clothcost
    const clothInput = document.getElementById('myclothcost-input');
    const clothAmount = clothInput.value;

    //total
    const expenses = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothAmount);
    const mytotalExpenses = document.getElementById('total-expneses');
    mytotalExpenses.innerText = expenses;

    const balance = parseFloat(incomeAmount) - parseFloat(expenses);
    const ourtotalbalance = document.getElementById('allbalance');
    ourtotalbalance.innerText = balance;

});
