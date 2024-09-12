import { InputUpdateProductDTO } from "src/application/dtos/update-product.dto";

export interface IUpdateProductUseCaseContract {
  execute(data: InputUpdateProductDTO): Promise<void>;
}
