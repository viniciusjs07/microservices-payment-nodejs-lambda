import { v4 as uuidv4 } from "uuid";

export class Product {
  public id?: string;
  public createdAt?: string;
  public updatedAt?: string;

  constructor(
    public name: string,
    public description: string,
    public salePrice: number,
    public quantity: number,
    public costPrice: number,
    public deliveryPrice: number,
    id?: string
  ) {
    this.id = id ?? uuidv4();
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
}
