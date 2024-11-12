type AreaNumber = {
  height: number;
  width: number;
};

type Height = AreaNumber["height"]; // look up type

//T=>{ height: string; width: number }
type AreaString<T> = {
  [key in keyof T]: T[key]; //----------> jehetu ekekta ekek type, number type k chailei jor kore string kora possible na. jeta j type, sei type rakhte hole
  // oita onujayi i dan pashe update howa uchit. protibar key ghurar smy key te j value thakbe, otai T[key] te pabo. Tai problem solve hoye jabe
};

const area1: AreaString<{ height: string; width: number }> = {
  height: "100",
  width: 50,
};
