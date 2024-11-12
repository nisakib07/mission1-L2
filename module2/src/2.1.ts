{
  //
  // type assertion

  let anything: any;

  anything = "Sakib";

  anything = 22;
  anything as number;

  // const kgToGm = (kgValue: string | number): string | number | undefined => {
  //   if (typeof kgValue === "string") {
  //     const convertedValue = parseFloat(kgValue) * 1000;
  //     return `Value is ${convertedValue}`;
  //   }
  //   if (typeof kgValue === "number") {
  //     const convertedValue = kgValue * 1000;
  //     return convertedValue;
  //   }
  // };

  // const result1 = kgToGm(1000) as number;

  // const result2 = kgToGm("1000") as string;

  // console.log(result1, result2);

  // type ErrorMessage = {
  //   message: string;
  // };

  // try {
  // } catch (error) {
  //   console.log((error as ErrorMessage).message);
  // }

  const meterToCm = (
    meterValue: string | number
  ): string | number | undefined => {
    if (typeof meterValue === "string") {
      const numberValue = parseFloat(meterValue);
      const convertedValue = numberValue * 1000;
      return `Value is ${convertedValue}`;
    }

    if (typeof meterValue === "number") {
      return meterValue * 1000;
    }
  };

  const result1 = meterToCm(100) as number;
  const result2 = meterToCm("100") as string;

  console.log(result1, typeof result2);

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
