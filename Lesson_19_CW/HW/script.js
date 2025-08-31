function Account (iban, owner, balance){
    this.owner=owner;
    this.iban=iban;
    this.balance= balance;

    this.deposit = function(amount){
        if(amount<=0){
            return false;
        }else{
            this.balance+= amount;
            return true;
        
        }
    };

    this.withdraw= function(amount){
        if(amount <=0 || this.balance< amount){
            return false;
        }else{
            this.balance-=amount;
            return true;
        }
    }
    this.getBalance= function(){
        return this.balance;
    }
}
const jackAccount = new Account("DE12345", "jack", 10000);
console.log(jackAccount);
console.log('+1000', jackAccount. deposit (1000));
console.log(jackAccount.getBalance());
console.log('-1500', jackAccount. withdraw (1500));
console.log(jackAccount.getBalance())
console.log("----------------перевод-----------------")
const annaAccount = new Account ("DE546465", "ann", 0);

console.log (transfer(jackAccount, annaAccount,1000));
console.log(annaAccount);

function transfer(acc1, acc2, amount){
    if (acc1.withdraw(amount)){
        acc2.deposit(amount);
        return new Transaction(acc1,acc2,amount);

    }else{
        return new Transaction(acc1, acc2,amount," не достаточно средств");
    }
}

function Transaction( acc1, acc2, amount, error){
    this.account1= acc1;
    this.account2= acc2;
    this. amount= amount;
    if(error!== undefined){
        this.error= error;
    }
    this.transactionInfo=function(){
        const iban1 = this.account1.iban || "счет не определен";
        const iban2 = this.account2.iban || "счет не определен";
        const msg=('error' in this)? ` - error : ${this.error}`: '';
        return `перевод с ${iban1} на ${iban2} на сумму ${amount} ${msg}`;

    }

}