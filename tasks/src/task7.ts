const sevenFunc = (input: string | number) => {
  if (typeof input === "string") {
    return input.length;
  } else if (typeof input === "number") {
    return input * input;
  }
};

const res1 = sevenFunc("Sakib");
console.log(res1);
