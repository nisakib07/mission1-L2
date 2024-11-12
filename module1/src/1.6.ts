//  function add (num1 : number, num2 :number =10) :number{
//     return num1+num2
//  }

//  const addNumber=(num1 : number, num2 : number) : number=> num1+num2;

//  const poorMe :{
//     firstName : string;
//     balance: number;
//     addBalance(newMoney:number):string;
//  }={
//     firstName :'Sakib',
//     balance:0,
//     addBalance(newMoney){
//         return `My new money is ${this.balance + newMoney}`
//     }
//  }

//  const array : number[]=[1,2,3]

//  const newArray : number[] = array.map((elem : number)=> elem*elem)

function add(a: number, b: number): number {
  return a + b;
}

const arrowAdd = (a: number, b: number): number => a + b;

const amiSakib = {
  name: "Sakib",
  role: "Developer",
  balance: 0,
  addBalance(notunMoney: number): number {
    return this.balance + notunMoney;
  },
};

const array: number[] = [1, 2, 3, 4];

const squaredArray: number[] = array.map((elem: number): number => elem * elem);
