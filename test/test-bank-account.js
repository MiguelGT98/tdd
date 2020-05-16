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
    let original = new BankAccount(100);
    original.subtract(50);
    original.append(100);
    let account = new BankAccount(100);
    account.subtract(40);
    account.subtract(20);

    it("(Positive) Should merge the account balances adding to original", () => {
      assert.equal(190, original.merge(account).current());
    });

    original = new BankAccount(100);
    original.subtract(50);
    original.append(100);
    account = new BankAccount(100);
    account.subtract(40);
    account.subtract(20);

    it("(Positive) Should merge the account histories", () => {
      assert.deepEqual(
        [...original.history(), ...account.history],
        original.merge(account).history()
      );
    });

    original = new BankAccount(100);
    original.subtract(50);
    original.append(100);
    account = new BankAccount(0);
    account.subtract(40);
    account.subtract(20);

    it("(Negative) Should merge the account balances subtracting from original", () => {
      assert.equal(90, original.merge(account).current());
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
