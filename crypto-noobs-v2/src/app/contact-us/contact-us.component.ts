import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ContactUsService } from './contact-us.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  formData!: FormGroup;
  constructor(
    private builder: FormBuilder,
    private contactUs: ContactUsService
  ) {}

  ngOnInit(): void {
    this.formData = this.builder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(formData: any): void { 
    console.log(formData);
    this.contactUs.addContactInfoToDb(formData);
  }
}
