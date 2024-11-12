// const countNums = (...nums: number[]) => {
//   let count: number = 0;
//   let i: number;

//   for (i = 0; i <= nums.length - 1; i++) {
//     count = count + nums[i];
//   }
//   return count;
// };

// const num1 = countNums(1, 2, 3, 4, 5);
// console.log(num1);

const count = (...nums: number[]) => {
  return nums.reduce((total, num) => total + num, 0);
};

const num1 = count(1, 2, 3, 4, 5);
console.log(num1);
