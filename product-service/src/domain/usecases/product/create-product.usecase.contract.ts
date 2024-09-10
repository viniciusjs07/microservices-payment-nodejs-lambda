import { InputCreateProductDTO } from "src/application/dtos/create-product.dto";

export interface ICreateProductUseCaseContract {
  execute(data: InputCreateProductDTO): Promise<void>;
}
