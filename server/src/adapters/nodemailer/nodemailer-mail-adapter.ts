import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "12bd96d04cecd1",
      pass: "fa225c63af0872"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
         from: 'Equipe Feedget <oi@feedget.com>',
         to: 'Lucas Ramson <lucasramson@gmail.com>',
         subject,
         html: body,
        });
    }
}