import { OutputProductDTO } from "src/application/dtos/list-products.dto";

export interface IListProductUseCaseContract {
  execute(): Promise<OutputProductDTO[]>;
}
