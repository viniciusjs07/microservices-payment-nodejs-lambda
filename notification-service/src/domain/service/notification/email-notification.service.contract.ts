import { InputSendEmailNotificationDTO } from "src/application/dtos/email-notification.dto";

export interface IEmailNotificationServiceContract {
  send(body: InputSendEmailNotificationDTO): Promise<void>;
}
