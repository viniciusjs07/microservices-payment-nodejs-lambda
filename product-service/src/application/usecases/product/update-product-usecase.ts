import { IProductRepositoryContract } from "src/domain/repositories/product/product.repository.contract";
import { IUpdateProductUseCaseContract } from "../../../domain/usecases/product/update-product.usecase.contract";
import { InputUpdateProductDTO } from "../../../application/dtos/update-product.dto";

export class UpdateProductUseCase implements IUpdateProductUseCaseContract {
  constructor(
    private readonly productRepositoryContract: IProductRepositoryContract
  ) {}

  async execute(data: InputUpdateProductDTO): Promise<void> {
    await this.productRepositoryContract.update(data);
  }
}
