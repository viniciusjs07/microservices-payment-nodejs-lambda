import { Product } from "src/domain/entities/Product";
export interface IProductRepositoryContract {
  create(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  list(): Promise<Product[]>;
  getById(id: string): Promise<Product>;
  delete(id: string): Promise<void>;
}
