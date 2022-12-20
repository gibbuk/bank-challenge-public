class Transaction {

    #credit;
    #date;
    #debit;
    #closingBalance;

    constructor(date, amount, typeOfTransaction) {
        this.#date = date;
        if (typeOfTransaction === 'deposit') {
            this.#credit = amount;
            this.#debit = 0;
        }
        if (typeOfTransaction === 'withdraw') {
            this.#debit = amount;
            this.#credit = 0;
        }
    }

    get credit() {
        return this.#credit;
    }

    get date() {
        return this.#date;
    }

    get debit() {
        return this.#debit;
    }

    get closingBalance() {
        return this.#closingBalance;
    }

    set closingBalance(number) {
        this.#closingBalance = number;
    }


}

module.exports = Transaction;