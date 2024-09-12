import { OutputGetProductDTO } from "src/application/dtos/get-product.dto";

export interface IGetProductUseCaseContract {
  execute(id: string): Promise<OutputGetProductDTO>;
}
