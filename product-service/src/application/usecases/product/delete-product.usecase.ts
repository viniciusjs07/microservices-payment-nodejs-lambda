import { IProductRepositoryContract } from "../../../domain/repositories/product/product.repository.contract";
import { IDeleteProductUseCaseContract } from "../../../domain/usecases/product/delete-product.usecase.contract";

export class DeleteProductUseCase implements IDeleteProductUseCaseContract {
  constructor(
    private readonly productRepositoryContract: IProductRepositoryContract
  ) {}

  async execute(id: string): Promise<void> {
    await this.productRepositoryContract.delete(id);
  }
}
