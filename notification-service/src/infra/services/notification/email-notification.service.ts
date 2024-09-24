import { InputSendEmailNotificationDTO } from "src/application/dtos/email-notification.dto";
import { IHttpServiceContract } from "src/domain/service/http/http.service.contract";
import { IEmailNotificationServiceContract } from "src/domain/service/notification/email-notification.service.contract";

export class EmailNotificationService
  implements IEmailNotificationServiceContract
{
  private brevoBaseApi = process.env.BREVO_URL;
  private apiKey = process.env.API_KEY_BREVO;
  constructor(private readonly httpServiceContract: IHttpServiceContract) {}
  async send(body: InputSendEmailNotificationDTO): Promise<void> {
    try {
      const requestParams = {
        sender: {
          name: process.env.SENDER_NAME,
          email: process.env.SENDER_EMAIL,
        },
        to: [
          {
            email: body.to,
            name: body.name,
          },
        ],
        subject: body.subject,
        htmlContent: body.body,
      };
      await this.httpServiceContract.post(
        `${this.brevoBaseApi}smtp/email`,
        requestParams,
        {
          "api-key": this.apiKey,
          "content-type": "application/json",
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
}
