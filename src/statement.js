class Statement {

    static #BALANCE_PAD_START = 8;
    static #BALANCE_PAD_END = 0;
    static #CREDIT_PAD_START = 8;
    static #CREDIT_PAD_END = 1;
    static #DEBIT_PAD_START = 7;
    static #DEBIT_PAD_END = 1;
    static #DISPLAY_ZERO_FALSE = false;

    static formatBalance(number) {
        return Statement.formatNumber(number, this.#BALANCE_PAD_START, this.#BALANCE_PAD_END);
    }

    static formatCredit(number) {
        return Statement.formatNumber(number, this.#CREDIT_PAD_START, this.#CREDIT_PAD_END, this.#DISPLAY_ZERO_FALSE);

    }

    static formatDate(unformattedDate) {
        return unformattedDate.replaceAll('-', '/').padEnd(11);
    }

    static formatDebit(number) {
        return Statement.formatNumber(number, this.#DEBIT_PAD_START, this.#DEBIT_PAD_END, this.#DISPLAY_ZERO_FALSE);
    }

    static formatNumber(number, padStart, padEnd, displayZero) {
        if (displayZero === false && number === 0) {
            return ''.padStart(padStart) + ''.padEnd(padEnd);
        }
        return Number.parseFloat(number).toFixed(2).padStart(padStart) + ''.padEnd(padEnd);
    }


    static printHeader() {
        console.log('date       || credit  || debit  || balance');
    }

    static printStatement(listOfTransactions) {
        Statement.printHeader();
        for (let i = listOfTransactions.length - 1; i >= 0; i--) {
            Statement.printTransaction(listOfTransactions[i])
        }
    }

    static printTransaction(transaction) {
        console.log(this.formatDate(transaction.date) +
            Statement.statementColumn() +
            Statement.formatCredit(transaction.credit) +
            Statement.statementColumn() +
            Statement.formatDebit(transaction.debit) +
            Statement.statementColumn() +
            Statement.formatBalance(transaction.closingBalance)
        );
    }

    static statementColumn() {
        return '||';
    }


}

module.exports = Statement;