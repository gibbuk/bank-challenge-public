const Statement = require("../src/statement.js");

describe(`Statement class -`, () => {
  describe(`printHeader() tests -`, () => {
    it(`is a static function, should return true for .hasOwnProperty('printHeader')`, () => {
      expect(Statement.hasOwnProperty("printHeader")).toBeTrue();
    });

    it(`should call console.log once with the expected string as an argument`, () => {
      let consoleLogSpy = spyOn(console, "log");
      const expectedString = "date       || credit  || debit  || balance";
      Statement.printHeader();
      expect(consoleLogSpy).toHaveBeenCalledOnceWith(expectedString);
    });
  });

  describe(`formatDate() tests -`, () => {
    it(`is a static function, should return true for .hasOwnProperty('formatDate')`, () => {
      expect(Statement.hasOwnProperty("formatDate")).toBeTrue();
    });

    it(`should return the date string in the expected format`, () => {
      const inputString = "14-01-2012";
      const expectedString = "14/01/2012 ";
      expect(Statement.formatDate(inputString)).toBe(expectedString);
    });
  });

  describe(`formatNumber() tests`, () => {
    let amount, padStart, padEnd, displayZero;

    beforeEach(() => {
      amount = 100;
      padStart = 0;
      padEnd = 0;
      displayZero = false;
    });

    afterEach(() => {
      amount = null;
      padStart = null;
      padEnd = null;
      displayZero = null;
    });

    it(`should return a string`, () => {
      expect(
        typeof Statement.formatNumber(amount, padStart, padEnd, displayZero)
      ).toBe("string");
    });

    it(`with an amount of 0, padEnd of 0 and a padStart of 4 or more, return should have length matching the padStart amount`, () => {
      amount = 0;
      padStart = 4;
      expect(Statement.formatNumber(amount, padStart, padEnd).length).toBe(
        padStart + padEnd
      );
    });

    it(`providing a number with no padding should produce a string of the number to two decimal numbers`, () => {
      expect(Statement.formatNumber(amount, padStart, padEnd)).toBe(
        Number.parseFloat(amount).toFixed(2)
      );
    });

    it(`with an amount and padStart of 0, return should have length matching the padEnd amount plus 4`, () => {
      amount = 0;
      padEnd = 1;
      expect(Statement.formatNumber(amount, padStart, padEnd).length).toBe(
        4 + padEnd
      );
    });

    it(`providing false for displayZero argument with 0 for padStart and padEnd should result in a return of ''`, () => {
      amount = 0;
      expect(
        Statement.formatNumber(amount, padStart, padEnd, displayZero)
      ).toBe("");
    });

    it(`for displayZero of false, should return a blank string of length padStart + padEnd for an amount of 0`, () => {
      amount = 0;
      padStart = 6;
      padEnd = 1;
      expect(
        Statement.formatNumber(amount, padStart, padEnd, displayZero)
      ).toBe("".padStart(padStart) + "".padEnd(padEnd));
    });

    it(`for displayZero of false and an amount > 0, should return a string that matches Statement.formatNumber() without providing a displayZero`, () => {
      amount = 500;
      padStart = 7;
      padEnd = 1;
      expect(
        Statement.formatNumber(amount, padStart, padEnd, displayZero)
      ).toBe(Statement.formatNumber(amount, padStart, padEnd));
    });
  });

  describe(`formatCredit() tests - `, () => {
    let amount, padStart, padEnd, displayZero, formatNumberSpy;

    beforeEach(() => {
      amount = 0;
      padStart = 8;
      padEnd = 1;
      displayZero = false;
    });

    afterEach(() => {
      amount = null;
      padStart = null;
      padEnd = null;
      displayZero = false;
      formatNumberSpy = null;
    });

    it(`should call Statement.formatNumber(amount, 8, 1, false) once`, () => {
      formatNumberSpy = spyOn(Statement, "formatNumber");
      Statement.formatCredit(amount);
      expect(formatNumberSpy).toHaveBeenCalledOnceWith(
        amount,
        padStart,
        padEnd,
        displayZero
      );
    });

    it(`for an amount > 0 should return the same string as Statement.formatNumber(amount, 8, 1, false)`, () => {
      amount = 100;
      expect(Statement.formatCredit(amount)).toBe(
        Statement.formatNumber(amount, padStart, padEnd, displayZero)
      );
    });

    it(`for an amount = 0 should return the same string as Statement.formatNumber(amount, 8, 1, false)`, () => {
      expect(Statement.formatCredit(amount)).toBe(
        Statement.formatNumber(amount, padStart, padEnd, displayZero)
      );
    });

    it(`is a static function, should return true for .hasOwnProperty('formatCredit')`, () => {
      expect(Statement.hasOwnProperty("formatCredit")).toBeTrue();
    });
  });
  describe(`formatDebit() tests - `, () => {
    let amount, padStart, padEnd, displayZero, formatNumberSpy;

    beforeEach(() => {
      amount = 0;
      padStart = 7;
      padEnd = 1;
      displayZero = false;
    });

    afterEach(() => {
      amount = null;
      padStart = null;
      padEnd = null;
      displayZero = false;
      formatNumberSpy = null;
    });

    it(`is a static function, should return true for .hasOwnProperty('formatDebit')`, () => {
      expect(Statement.hasOwnProperty("formatDebit")).toBeTrue();
    });

    it(`should call Statement.formatNumber(amount, 7, 1, false) once`, () => {
      formatNumberSpy = spyOn(Statement, "formatNumber");
      Statement.formatDebit(amount);
      expect(formatNumberSpy).toHaveBeenCalledOnceWith(
        amount,
        padStart,
        padEnd,
        displayZero
      );
    });

    it(`for an amount > 0 should return the same string as Statement.formatNumber(amount, 7, 1, false)`, () => {
      amount = 100;
      expect(Statement.formatDebit(amount)).toBe(
        Statement.formatNumber(amount, padStart, padEnd, displayZero)
      );
    });

    it(`for an amount = 0 should return the same string as Statement.formatNumber(amount, 7, 1, false)`, () => {
      expect(Statement.formatDebit(amount)).toBe(
        Statement.formatNumber(amount, padStart, padEnd, displayZero)
      );
    });
  });

  describe(`statementColumn() tests - `, () => {
    it(`should return '||'`, () => {
      expect(Statement.statementColumn()).toBe("||");
    });
  });

  describe(`formatBalance() tests -`, () => {
    let padStart, padEnd, amount, formatNumberSpy;

    beforeEach(() => {
      padStart = 8;
      padEnd = 0;
      amount = 0;
    });

    afterEach(() => {
      padStart = null;
      padEnd = null;
      amount = null;
      formatNumberSpy = null;
    });

    it(`is a static function, should return true for .hasOwnProperty('formatBalance')`, () => {
      expect(Statement.hasOwnProperty("formatBalance")).toBeTrue();
    });

    it(`should call Statement.formatNumber(amount, 8, 0) once`, () => {
      formatNumberSpy = spyOn(Statement, "formatNumber");
      Statement.formatBalance(amount);
      expect(formatNumberSpy).toHaveBeenCalledOnceWith(
        amount,
        padStart,
        padEnd
      );
    });

    it(`for an amount > 0 should return the same string as Statement.formatNumber(amount, 8, 0)`, () => {
      amount = 100;
      expect(Statement.formatBalance(amount)).toBe(
        Statement.formatNumber(amount, padStart, padEnd)
      );
    });

    it(`for an amount = 0 should return the same string as Statement.formatNumber(amount, 8, 0)`, () => {
      expect(Statement.formatBalance(amount)).toBe(
        Statement.formatNumber(amount, padStart, padEnd)
      );
    });
  });

  describe(`printTransaction() tests -`, () => {
    let expected, mockTransaction;

    beforeEach(() => {
      mockTransaction = {
        date: "01-01-2001",
        credit: 10,
        debit: 20,
        closingBalance: 400,
      };
      expected = `01/01/2001 ||   10.00 ||  20.00 ||  400.00`;
    });

    afterEach(() => {
      mockTransaction = null;
      expected = null;
    });

    it(`should call console.log once with the expected string`, () => {
      let consoleLogSpy = spyOn(console, "log");
      Statement.printTransaction(mockTransaction);
      expect(consoleLogSpy).toHaveBeenCalledOnceWith(expected);
    });
  });

  describe(`printStatement() tests -`, () => {
    let printHeaderSpy, printTransactionSpy;

    let mockTransactionsList;

    beforeEach(() => {
      mockTransactionsList = [
        { transaction: `1` },
        { transaction: "2" },
        { transaction: `3` },
      ];
      printHeaderSpy = spyOn(Statement, "printHeader");
      printTransactionSpy = spyOn(Statement, "printTransaction");
    });

    afterEach(() => {
      mockTransactionsList = null;
      printHeaderSpy = null;
      printTransactionSpy = null;
    });

    it(`should have called printHeader once`, () => {
      Statement.printStatement(mockTransactionsList);
      expect(printHeaderSpy).toHaveBeenCalledTimes(1);
    });

    //
    it(`should have called printHeader before print transaction Line`, () => {
      Statement.printStatement(mockTransactionsList);
      expect(printHeaderSpy).toHaveBeenCalledBefore(printTransactionSpy);
    });

    it(`Should have called printTransaction the same number of times as mockTransactionsList.length`, () => {
      Statement.printStatement(mockTransactionsList);
      expect(printTransactionSpy).toHaveBeenCalledTimes(
        mockTransactionsList.length
      );
    });

    it(`should have called printTransaction passing in mockTransactionsList entry in the expected order`, () => {
      Statement.printStatement(mockTransactionsList);
      expect(printTransactionSpy.calls.argsFor(0)).toEqual([
        mockTransactionsList[2],
      ]);
      expect(printTransactionSpy.calls.argsFor(1)).toEqual([
        mockTransactionsList[1],
      ]);
      expect(printTransactionSpy.calls.argsFor(2)).toEqual([
        mockTransactionsList[0],
      ]);
    });
  });
});
