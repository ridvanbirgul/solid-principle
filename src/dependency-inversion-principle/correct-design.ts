/**
 * With this design Notification class doesn't depend email or sms class.
 */
namespace CorrectDesign {
  interface IMessage {
    send(): void;
  }

  class Email implements IMessage {
    send(): void {
      this._sendEmail();
    }

    _sendEmail() {
      console.log("Email sent.");
    }
  }

  class Sms implements IMessage {
    send(): void {
      this._sendSms();
    }

    _sendSms() {
      console.log("Sms sent.");
    }
  }

  class Notification {
    sender(message: IMessage) {
      message.send();
    }
  }

  let notification = new Notification();
  notification.sender(new Email());
  notification.sender(new Sms());
}
