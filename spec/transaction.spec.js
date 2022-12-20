const Transaction = require("../src/transaction.js");

describe(`Transaction class tests -`, () => {
  describe(`constructor()`, () => {
    describe(`deposit tests -`, () => {
      let transaction, amount, date, typeOfTransaction;

      beforeEach(() => {
        date = "13-01-2012";
        amount = 100;
        typeOfTransaction = "deposit";
        transaction = new Transaction(date, amount, typeOfTransaction);
      });

      afterEach(() => {
        transaction = null;
        date = null;
        amount = null;
        typeOfTransaction = null;
      });

      it(`should set the date to the date provided`, () => {
        expect(transaction.date).toBe(date);
      });

      it(`Should set credit to the amount provided`, () => {
        expect(transaction.credit).toBe(amount);
      });

      it(`Should return 0 for debit`, () => {
        expect(transaction.debit).toBe(0);
      });

      it(`Should return UNDEFINED for the closingBalance`, () => {
        expect(transaction.closingBalance).toBeUndefined();
      });
    });

    describe(`withdrawal tests -`, () => {
      let transaction, amount, date, typeOfTransaction;

      beforeEach(() => {
        date = "13-01-2012";
        amount = 100;
        typeOfTransaction = "withdraw";
        transaction = new Transaction(date, amount, typeOfTransaction);
      });

      afterEach(() => {
        transaction = null;
        date = null;
        amount = null;
        typeOfTransaction = null;
      });

      it(`should return the date provided`, () => {
        expect(transaction.date).toBe(date);
      });

      it(`should set the debit to the amount`, () => {
        expect(transaction.debit).toBe(amount);
      });

      it(`should return 0 for credit`, () => {
        expect(transaction.credit).toBe(0);
      });

      it(`should return UNDEFINED for the closingBalance property value`, () => {
        expect(transaction.closingBalance).toBeUndefined();
      });
    });
  });

  describe(`closingBalance setter tests -`, () => {
    let transaction, amount;

    beforeEach(() => {
      transaction = new Transaction();
      amount = 500;
    });

    afterEach(() => {
      transaction = null;
      amount = null;
    });

    it(`Should return the positive amount provided`, () => {
      transaction.closingBalance = amount;
      expect(transaction.closingBalance).toBe(amount);
    });

    it(`should return the negative amount provided`, () => {
      amount = -Math.abs(amount);
      transaction.closingBalance = amount;
      expect(transaction.closingBalance).toBe(amount);
    });
  });
});
