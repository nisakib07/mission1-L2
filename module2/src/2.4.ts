interface Developer<T, X = null> {
  name: string;
  job: {
    role: string;
    salary: number;
    weekend: string;
  };
  personalRoom: T;
  bike?: X;
}

type GoribDeveloper = {
  AC: boolean;
  Monitor: number;
};

const goribDeveloper: Developer<GoribDeveloper> = {
  name: "Sakib",
  job: {
    role: "Shopify Devloper",
    salary: 18500,
    weekend: "Friday",
  },
  personalRoom: {
    AC: false,
    Monitor: 2,
  },
};

interface RichDeveloper {
  AC: boolean;
  Monitor: number;
  Desk: boolean;
}

interface Bike {
  brand: string;
  cc: string;
}

const richDeveloper: Developer<RichDeveloper, Bike> = {
  name: "Nadiatul",
  job: {
    role: "Backend Devloper",
    salary: 18500,
    weekend: "Friday",
  },
  personalRoom: {
    AC: false,
    Monitor: 2,
    Desk: true,
  },

  bike: {
    brand: "Yamaha",
    cc: "150cc",
  },
};
