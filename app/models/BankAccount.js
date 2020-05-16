class BankAccount {
  constructor(balance) {
    this.balance = balance;
    this.hist = [];
  }

  current() {
    return this.balance;
  }

  append(amount) {
    if (amount > 0) this.balance += amount;
    this.hist.push({ operation: "append", amount });

    return this.balance;
  }

  subtract(amount) {
    if (amount > 0) this.balance -= amount;
    this.hist.push({ operation: "subtract", amount });

    return this.balance;
  }

  merge(account) {
    this.balance += account.current();
    this.hist = [...this.history(), ...account.history()];
    return this;
  }

  history() {
    return this.hist;
  }
}

module.exports = BankAccount;
