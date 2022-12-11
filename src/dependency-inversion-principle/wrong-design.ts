/**
 * Dependency inversion principle aims that subclasses and superclasses shouldn't depend each other.
 * They depend via abstraction or interface
 */

namespace WrongDesign {
  /**
   * In this design, Notification class depends on Email and Sms.
   */
  class Email {
    sendEmail(): boolean {
      return true;
    }
  }

  class Sms {
    sendSms(): boolean {
      return true;
    }
  }

  class Notification {
    private email: Email;
    private sms: Sms;

    constructor() {
      this.email = new Email();
      this.sms = new Sms();
    }

    sender() {
      let smsSend = this.sms.sendSms();
      let mailSend = this.email.sendEmail();
    }
  }
}
