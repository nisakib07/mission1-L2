"use strict";
function add(num1, num2 = 10) {
    return num1 + num2;
}
const addNumber = (num1, num2) => num1 + num2;
const poorMe = {
    firstName: 'Sakib',
    balance: 0,
    addBalance(newMoney) {
        return `My new money is ${this.balance + newMoney}`;
    }
};
const array = [1, 2, 3];
const newArray = array.map((elem) => elem * elem);
