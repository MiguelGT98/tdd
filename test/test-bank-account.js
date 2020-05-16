const assert = require("assert");
const BankAccount = require("../app/models/BankAccount");

describe("Bank Account", () => {
  describe("#current", () => {
    const current = 100;
    const bankAccount = new BankAccount(current);

    it("Should return the current balance on the account", () => {
      assert.equal(current, bankAccount.current());
    });
  });

  describe("#append", () => {
    const bankAccount = new BankAccount(0);

    it("(Positive) Should add the amount to the account and return the new balance", () => {
      assert.equal(100, bankAccount.append(100));
    });

    it("(Negative) Should not add the amount to the account and return the same balance", () => {
      assert.equal(100, bankAccount.append(-50));
    });
  });

  describe("#subtract", () => {
    const bankAccount = new BankAccount(100);

    it("(Positive) Should subtract the amount to the account and return the new balance", () => {
      assert.equal(50, bankAccount.subtract(50));
    });

    it("(Negative) Should not subtract the amount to the account and return the same balance", () => {
      assert.equal(50, bankAccount.append(-20));
    });
  });

  describe("#merge", () => {
    const original = new BankAccount(100);
    original.subtract(50);
    original.append(100);
    const account = new BankAccount(100);
    account.subtract(40);
    account.subtract(20);

    it("(Positive) Should merge the account balances adding to original", () => {
      assert.equal(190, original.merge(account).current());
    });

    const original2 = new BankAccount(100);
    original2.subtract(50);
    original2.append(100);
    const account2 = new BankAccount(100);
    account2.subtract(40);
    account2.subtract(20);

    it("(Positive) Should merge the account histories", () => {
      assert.deepEqual(
        [
          { operation: "subtract", amount: 50 },
          { operation: "append", amount: 100 },
          { operation: "subtract", amount: 40 },
          { operation: "subtract", amount: 20 },
        ],
        original2.merge(account2).history()
      );
    });

    const original3 = new BankAccount(100);
    original3.subtract(50);
    original3.append(100);
    const account3 = new BankAccount(0);
    account3.subtract(40);
    account3.subtract(20);

    it("(Negative) Should merge the account balances subtracting from original", () => {
      assert.equal(90, original3.merge(account3).current());
    });
  });

  describe("#history", () => {
    const bankAccount = new BankAccount(0);
    bankAccount.subtract(50);
    bankAccount.append(100);

    it("Should return the account history", () => {
      assert.deepEqual(
        [
          { operation: "subtract", amount: 50 },
          { operation: "append", amount: 100 },
        ],
        bankAccount.history()
      );
    });
  });
});
