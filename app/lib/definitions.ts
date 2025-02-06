export type Milk = {
  id: number;
  time: Date;
  type: "ASI" | "Susu Formula";
  make: number;
  left: number;
  amount: number;
  desc: string;
};

export type Tidur = {
  id: number;
  time: Date;
  duration: number;
  desc: string;
};

export type Diaper = {
  id: number;
  time: Date;
  type: "PUP" | "POO";
  desc: string;
};
