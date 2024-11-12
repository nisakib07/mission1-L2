const reverseString = (text: string) => {
  return text.split("").reverse().join("");
};

const text1 = reverseString("Hello");

console.log(text1);
