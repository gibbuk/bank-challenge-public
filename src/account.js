class Account {
  #currentBalance = 0;
  #listOfTransactions = [];

  addTransaction(transaction) {
    this.#listOfTransactions = [...this.#listOfTransactions, transaction];
    this.reconcileBalances(transaction);
  }

  get currentBalance() {
    return this.#currentBalance;
  }

  get listOfTransactions() {
    return this.#listOfTransactions;
  }

  reconcileBalances(transaction) {
    this.#currentBalance += transaction.credit - transaction.debit;
    transaction.closingBalance = this.#currentBalance;
  }
}

module.exports = Account;
