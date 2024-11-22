export class Car {
  _id!: string;
  photo: string;
  name: string;
  model: string;
  price: number;

  constructor(photo: string, name: string, model: string, price: number) {
    this.photo = photo;
    this.name = name;
    this.model = model;
    this.price = price;
  }
}
