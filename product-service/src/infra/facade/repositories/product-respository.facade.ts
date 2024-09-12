import { ProductDynamoRepository } from "src/infra/database/dynamodb/product.dynamo.repository";
import { IProductRepositoryContract } from "src/domain/repositories/product/product.repository.contract";

// Evita criar várias instâncias de ProductDynamoRepository dentro das lambdas.
export class ProductRepositoryFacade {
  private static instance: IProductRepositoryContract;
  public static getInstance(): IProductRepositoryContract {
    if (!this.instance) {
      this.instance = new ProductDynamoRepository();
    }
    return this.instance;
  }
}
