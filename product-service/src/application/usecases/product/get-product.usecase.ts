import { IProductRepositoryContract } from "../../../domain/repositories/product/product.repository.contract";
import { IGetProductUseCaseContract } from "../../../domain/usecases/product/get-product.usecase.contract";
import { OutputGetProductDTO } from "../../../application/dtos/get-product.dto";

export class GetProductByIdUseCase implements IGetProductUseCaseContract {
  constructor(
    private readonly productRepositoryContract: IProductRepositoryContract
  ) {}

  async execute(id: string): Promise<OutputGetProductDTO> {
    const product = await this.productRepositoryContract.getById(id);
    return product as OutputGetProductDTO;
  }
}
