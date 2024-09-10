import { InputCreateProductDTO } from "src/application/dtos/create-product.dto";
import { ICreateProductUseCaseContract } from "../../../domain/usecases/product/create-product.usecase.contract";
import { IProductRepositoryContract } from "src/domain/repositories/product/product.repository.contract";

export class CreateProductUseCase implements ICreateProductUseCaseContract {
  constructor(
    private readonly productRepositoryContract: IProductRepositoryContract
  ) {}

  async execute(data: InputCreateProductDTO): Promise<void> {
   await this.productRepositoryContract.create(data)
  }
}
