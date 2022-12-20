const Account = require('../src/account.js');

describe(`Account class tests -`, () => {

    describe(`Getter tests -`, () => {

        let account;

        beforeEach(() => {
            account = new Account();
        });

        afterEach(() => {
            account = null;
        });

        it(`should return a currentBalance of 0`, () => {
            expect(account.currentBalance).toBe(0);

        });

        it(`should return an array`, () => {
            expect(Array.isArray(account.listOfTransactions)).toBeTrue();
        });

        it(`should return a length of 0`, () => {
            expect(account.listOfTransactions.length).toBe(0);
        });
    });

    describe(`reconcileBalances() tests`, () => {

        let account, mockTransaction, amount, originalBalance;

        beforeEach(() => {
            account = new Account();
            amount = 100;
            mockTransaction = {
                credit: 0,
                debit: 0,
                closingBalance: undefined
            }
            originalBalance = account.currentBalance;

        });

        afterEach(() => {
            account = null;
            amount = null;
            transaction = null;
            originalBalance = null;
        });

        it(`for a deposit it should have increased account.currentBalance by the mockTransactions credit amount`, () => {
            mockTransaction.credit = amount;
            account.reconcileBalances(mockTransaction);
            expect(account.currentBalance).toBe(originalBalance + amount);

        });

        it(`for a withdrawal it should have decreased account.currentBalance by the mockTransactions debit amount`, () => {
            mockTransaction.debit = amount;
            account.reconcileBalances(mockTransaction);
            expect(account.currentBalance).toBe(originalBalance - amount);

        });

        it(`for a deposit, it should have amended mockTransaction.closingBalance to the updated account.currentBalance`, () => {
            mockTransaction.credit = amount;
            account.reconcileBalances(mockTransaction);
            expect(mockTransaction.closingBalance).toBe(account.currentBalance);

        });

        it(`for a withdrawal, it should have amended mockTransaction.closingBalance to the updated account.currentBalance`, () => {
            mockTransaction.credit = amount;
            account.reconcileBalances(mockTransaction);
            expect(mockTransaction.closingBalance).toBe(account.currentBalance);
        });


    });

    describe(`addTransaction() tests - `, () => {

        let account, mockTransaction, reconcileBalancesSpy;

        beforeEach(() => {
            account = new Account();
            mockTransaction = {};
            reconcileBalancesSpy = spyOn(account, 'reconcileBalances');
        });

        afterEach(() => {
            account = null;
            mockTransaction = null;
            reconcileBalancesSpy = null;
        });

        it(`Should have increased listOfTransactions.length by 1`, () => {
            account.addTransaction(mockTransaction);
            expect(account.listOfTransactions.length).toBe(1);
        });

        it(`Should have added the mockTransaction to listOfTransactions`, () => {
            account.addTransaction(mockTransaction);
            expect(account.listOfTransactions[0]).toBe(mockTransaction);

        });

        it(`should have called reconcileBalances once with the mockTransaction object`, () => {
            account.addTransaction(mockTransaction);
            expect(reconcileBalancesSpy).toHaveBeenCalledOnceWith(mockTransaction);
        });

    });

})
