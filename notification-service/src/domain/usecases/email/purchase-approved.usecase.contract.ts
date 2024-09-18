import { InputPurchaseApprovedDTO } from "src/application/dtos/purchase-approved.dto";

export interface IPurchaseApprovedUseCaseContract {
  execute(data: InputPurchaseApprovedDTO): Promise<void>;
}
