import { MailjetMessage } from './MailjetMessage';

export class MailjetRequest {
  constructor(messages: MailjetMessage[]) {
    this.messages = messages;
  }

  messages: MailjetMessage[];
}
