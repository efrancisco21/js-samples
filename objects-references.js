let myAccount = {
    name: 'Emmanuel Francisco',
    expenses: 0,
    income: 0
}

let addIncome = function (account, income) {
    account.income = account.income + income;
}

let addExpenses = function (account, expenses) {
    account.expenses = account.expenses + expenses;
}

let resetAccount = function (account) {
    account.income = 0;
    account.expenses =0;
}

let getAccountSummary = function (account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses`
}

addIncome(myAccount, 1000);
addExpenses(myAccount, 100);
addExpenses(myAccount, 100);
console.log( getAccountSummary(myAccount) );
resetAccount(myAccount);
console.log( getAccountSummary(myAccount) );