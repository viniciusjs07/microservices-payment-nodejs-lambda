import { IPurchaseApprovedUseCaseContract } from "src/domain/usecases/email/purchase-approved.usecase.contract";
import { InputPurchaseApprovedDTO } from "../dtos/purchase-approved.dto";
import { IEmailNotificationServiceContract } from "src/domain/service/notification/email-notification.service.contract";

export class PurchaseApprovedUseCase
  implements IPurchaseApprovedUseCaseContract
{
  constructor(
    private readonly emailService: IEmailNotificationServiceContract
  ) {}
  async execute(data: InputPurchaseApprovedDTO): Promise<void> {
    await this.emailService.send({
      to: data.email,
      subject: "Compra aprovada!",
      body: `Olá, ${data.name}. Sua compra foi aprovada!
      <br/>
      O total da sua compra é: R$ ${data.purchaseTotalAmount}!
      <br/>
      Data da compra: ${data.purchaseData}
      <br/>
      Meio de pagamento: ${data.paymentMethod}
      <br/>
      `,
    });
  }
}
