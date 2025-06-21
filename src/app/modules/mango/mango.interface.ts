export interface IMango {
  name: string;
  variety: string;
  unit: "KG" | "TON";
  price: number;
  stock: number;
  origin: string;
  season: "Summer" | "Winter";
}
