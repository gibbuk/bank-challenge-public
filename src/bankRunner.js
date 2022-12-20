const Account = require('./account');
const Statement = require('./statement');
const Transaction = require('./transaction');


const account = new Account();
account.addTransaction(new Transaction('10-01-2012', 1000, 'deposit'));
account.addTransaction(new Transaction(`13-01-2012`, 2000, `deposit`));
account.addTransaction(new Transaction(`14-01-2012`, 500, `withdraw`));

Statement.printStatement(account.listOfTransactions);