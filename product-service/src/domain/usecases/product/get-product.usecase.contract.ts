import { OutputGetProductDTO } from "../../../application/dtos/get-product.dto";

export interface IGetProductUseCaseContract {
  execute(id: string): Promise<OutputGetProductDTO>;
}
