import { InputUpdateProductDTO } from "../../../application/dtos/update-product.dto";

export interface IUpdateProductUseCaseContract {
  execute(data: InputUpdateProductDTO): Promise<void>;
}
