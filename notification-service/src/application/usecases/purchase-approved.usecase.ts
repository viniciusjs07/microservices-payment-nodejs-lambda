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
      name: data.name,
      subject: "Compra aprovada!",
      body: `
      <html>
        <body> 
        <h2>Olá, ${data.name}. Sua compra foi aprovada!</h2>
        <br/>
        <p> O total da sua compra é: R$ ${data.purchaseTotalAmount}!</p>
        <br/>
        <p> Data da compra: ${data.purchaseData}</p>
        <br/>
       <p> Meio de pagamento: ${data.paymentMethod}</p>
        <br/>
      </body> 
      </html>
      `,
    });
  }
}
