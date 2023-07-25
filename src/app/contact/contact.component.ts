import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {

  constructor() { }

  [x: string]: any;


  name: string = '';
  name_active: boolean = false;
  email_active: boolean = false;
  message_active: boolean = false;
  email_text: string = '';
  message: string = '';
  email_valid: boolean = false;
  regex = new RegExp('^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$');
  form_valid: boolean = false;
  showLoader = false;
  emailSent = false;


  changeValue(value: any, inputfield: string) {
    if (inputfield == 'name') this.name = value;
    if (inputfield == 'email') {
      this.email_text = value;
      this.email_valid = this.regex.test(value);
    }
    if (inputfield == 'message') this.message = value;
    if (this.email_valid && this.name.length > 1 && this.message.length > 1) this.form_valid = true;
    if (!this.email_valid || this.name.length < 1 || this.message.length < 1) this.form_valid = false;
  }

  setFocus(inputfield: string) {
    if (inputfield == 'name') this.name_active = true;
    if (inputfield == 'email') this.email_active = true;
    if (inputfield == 'message') this.message_active = true;
  }

  async sendMail() {
    if (!this.email_valid || this.name.length < 1 || this.message.length < 1) return;
    this.startAnimation();
    let fd = new FormData();
    fd.append('name', this.name);
    fd.append('email', this.email_text);
    fd.append('message', this.message);
    await fetch('https://david-osipov.developerakademie.net/send_mail/send_mail.php', {
      method: "POST",
      body: fd
    });

    this.showLoader = true;
    this.emailSent = true;
  }

  startAnimation() {
    setTimeout(() => {
      this.showLoader = false;
      this.emailSent = true;
    }, 1100);
    setTimeout(() => {
      this.name_active = false
      this.email_active = false
      this.message_active = false
      this.email_text = ''
      this.name = ''
      this.message = ''
      this.showLoader = false;
      this.emailSent = false;
      this.form_valid = false;
    }, 3100);
  }
}
