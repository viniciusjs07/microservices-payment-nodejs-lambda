import { IProductRepositoryContract } from "../../../domain/repositories/product/product.repository.contract";
import { IListProductUseCaseContract } from "../../../domain/usecases/product/list-product.usecase.contract";
import { OutputProductDTO } from "../../../application/dtos/list-products.dto";

export class ListProductsUseCase implements IListProductUseCaseContract {
  constructor(
    private readonly productRepositoryContract: IProductRepositoryContract
  ) {}

  async execute(): Promise<OutputProductDTO[]> {
    const products = await this.productRepositoryContract.list();
    return products as OutputProductDTO[];
  }
}
