{
  // nullable types

  const searchValue = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("Nothing to search");
    }
  };

  searchValue("SAKIB");
}

const covertToMeterPerSecond = (kmValue: unknown) => {
  if (typeof kmValue === "number") {
    const result = (kmValue * 1000) / 3600;
    console.log(`Result is ${result} ms^-1`);
  } else if (typeof kmValue === "string") {
    const [numericValue, string] = kmValue.split(" ");
    const result = (parseFloat(numericValue) * 1000) / 3600;
    console.log(result);
  } else {
    console.log("Nothing");
  }
};

covertToMeterPerSecond(2);
