import { MailjetEmailUser } from './MailjetEmailUser';

export class MailjetMessage {
  constructor(
    from: MailjetEmailUser,
    to: MailjetEmailUser[],
    subject: string,
    textpart: string
  ) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.textpart = textpart;
  }

  from: MailjetEmailUser;
  to: MailjetEmailUser[];
  subject: string;
  textpart: string;
}
