import { OutputProductDTO } from "../../../application/dtos/list-products.dto";

export interface IListProductUseCaseContract {
  execute(): Promise<OutputProductDTO[]>;
}
