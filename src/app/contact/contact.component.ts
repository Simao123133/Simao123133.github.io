import { Component, OnInit, ElementRef} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  formData = new FormGroup({
    user_email: new FormControl('', [Validators.required, Validators.email]),
    user_name: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  constructor(private elementRef: ElementRef, readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {

    if(this.formData.invalid){
      return
    }
      
    emailjs.sendForm('service_6n4u29o', 'contact_form', e.target as HTMLFormElement, '6IkrdiP0ZgdfMf4oy')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    this.snackBar.open('Email Sent Sucessful!', '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = null 
  }

}
