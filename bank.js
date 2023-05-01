
// Object ile yazilish formasi.

// // DOM elements
// var userName = document.querySelector("#userName");
// var money = document.querySelector("#money");
// var addCashMoney = document.querySelector("#addCashMoney");
// var removeMoney = document.querySelector("#removeMoney");
// var addName = document.querySelector("#addName");
// var addMoney = document.querySelector("#addMoney");
// var btnIN = document.querySelector("#btnIN");
// var btnOut = document.querySelector("#btnOut");





// // main function
// function Atm(name, surname, balance, cashIn, cashOut,) {
//     this.name = name;
//     this.surname = surname;
//     this.balance = balance;
//     this.cashIn = cashIn;
//     this.cashOut = cashOut;

//     // CASH IN Money
//     this.addBalance = () => {
//         if (!addName.value.trim()) {
//             return alert("Please fill in the blank");
//         } else if (!addMoney.value.trim()) {
//             return alert("Please fill in the blank");
//         }
//         // } else if (typeof(addName.value) == 'number') {
//         //   return alert("Please fill in the blank Name");
//         // } else if (typeof(addMoney.value) !== 'number') {
//         //   return alert("Please fill in the blank Money");
//         // }
//         this.cashIn = +addMoney.value
//         this.balance += this.cashIn
//         console.log("cash", this.cashIn);
//         console.log("balance", this.balance);
//         addMoney.value = ""
//         this.name = addName.value
//         console.log(this.name);
//         addName.value = ""
//         userName.innerHTML = this.name
//         money.innerHTML = `Balance: ` + this.balance + `azn`
//         addCashMoney.innerHTML = `Cash In: ` + this.cashIn + `azn`;
//         removeMoney.innerHTML = `Cash Out: 0`;
//     }

//     // CASH OUT Money
//     this.removeBalance = () => {
//         if (addMoney.value > this.balance) {
//             return alert("Your account does not have enough money");
//         }
//         this.cashOut = addMoney.value
//         this.balance -= this.cashOut
//         removeMoney.innerHTML = `Cash Out: ` + this.cashOut + `azn`;
//         addMoney.value = "";
//         addName.value = "";
//         money.innerHTML = `Balance: ` + this.balance + `azn`;
//         addCashMoney.innerHTML = `Cash In: 0`
//         console.log("cash out", this.cashOut);
//         console.log("balance", this.balance);
//     }

// }


// var muradPanahli = new Atm("Murad", "Panahli", 0, 0, 0)
// btnIN.addEventListener("click", muradPanahli.addBalance)
// btnOut.addEventListener("click", muradPanahli.removeBalance)
// console.log(muradPanahli);



// class ile yazilish formasi...


class DomElements {
    userName = document.querySelector("#userName");
    money = document.querySelector("#money");
    addCashMoney = document.querySelector("#addCashMoney");
    removeMoney = document.querySelector("#removeMoney");
    addName = document.querySelector("#addName");
    addMoney = document.querySelector("#addMoney");
    btnIN = document.querySelector("#btnIN");
    btnOut = document.querySelector("#btnOut");

}


class BankAtm extends DomElements {
    
    constructor(name, surname, balance, cashIn, cashOut) {
        super();
    this.name = name;
    this.surname = surname;
    this.balance = balance;
    this.cashIn = cashIn;
    this.cashOut = cashOut;
    }

    addBalance() {
        if (!this.addName.value.trim()) {
        return alert("Please fill in the blank");
        } else if (!this.addMoney.value.trim()) {
            return alert("Please fill in the blank");
        }
        // } else if (typeof(addName.value) == 'number') {
        //   return alert("Please fill in the blank Name");
        // } else if (typeof(addMoney.value) !== 'number') {
        //   return alert("Please fill in the blank Money");
        // }
        this.cashIn = +this.addMoney.value
        this.balance += this.cashIn
        console.log("cash", this.cashIn);
        console.log("balance", this.balance);
        this.addMoney.value = ""
        this.name = this.addName.value
        console.log(this.name);
        this.addName.value = ""
        this.userName.innerHTML = this.name
        this.money.innerHTML = `Balance: ` + this.balance + `azn`
        this.addCashMoney.innerHTML = `Cash In: ` + this.cashIn + `azn`;
        this.removeMoney.innerHTML = `Cash Out: 0`;
    }

    removeBalance() {
    if (this.addMoney.value > this.balance) {
    return alert("Your account does not have enough money");
    }
    this.cashOut = this.addMoney.value
    this.balance -= this.cashOut
    this.removeMoney.innerHTML = `Cash Out: ` + this.cashOut + `azn`;
    this.addMoney.value = "";
    this.addName.value = "";
    this.money.innerHTML = `Balance: ` + this.balance + `azn`;
    this.addCashMoney.innerHTML = `Cash In: 0`
    console.log("cash out", this.cashOut);
    console.log("balance", this.balance);
    }

}



var muradPanahli = new BankAtm("Murad", "Panahli", 0, 0, 0);
btnIN.addEventListener("click", muradPanahli.addBalance.bind(muradPanahli));
btnOut.addEventListener("click", muradPanahli.removeBalance.bind(muradPanahli));

