class BankAccount {
  TransactionType = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw"
};

  constructor(balance = 0) {
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    if(amount > 0) {
      this.transactions.push({type: this.TransactionType.DEPOSIT, amount});
    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
    return `Deposit amount must be greater than zero.`;
  }

  withdraw(amount) {
    if(amount > 1 && amount <= this.balance) {
      this.transactions.push({type: this.TransactionType.WITHDRAW, amount});
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`
    }
    return 'Insufficient balance or invalid amount.';
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits =  this.transactions
      .filter( (transaction) => transaction.type === this.TransactionType.DEPOSIT)
      .map( (transaction) => transaction.amount);
    return 'Deposits: ' + deposits.join(',');
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter( (transaction) => transaction.type === this.TransactionType.WITHDRAW)
      .map( (transaction) => transaction.amount);
    return 'Withdrawals: ' + withdrawals.join(',');
  }


}

const myAccount = new BankAccount();
console.log(
  myAccount.deposit(100),
  myAccount.deposit(5000),
  myAccount.withdraw(500),
  myAccount.withdraw(750),
  myAccount.deposit(10),
  '\n-------------\n',
  myAccount.listAllDeposits(),

)


