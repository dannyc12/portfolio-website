import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  showMsg: boolean;
  formData: FormGroup;

  // This sets the title of the site in each the browser tab
  constructor(private titleService: Title, private builder: FormBuilder) {
    this.titleService.setTitle('Danny Clynes - Contact');
  }

  public sendEmail(e: Event) {
    console.log(e.target);
    emailjs.sendForm('service_b9zaqfk', 'template_bhclqaf', e.target as HTMLFormElement, '8MNbQauVW7d5KvxmL')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        console.log('result: ' + JSON.stringify(result));
        this.showMsg = true;
      }, (error) => {
        console.log(error.text);
      });
  }

  ngOnInit() {
    this.formData = this.builder.group ({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required])
    })
  }
}
