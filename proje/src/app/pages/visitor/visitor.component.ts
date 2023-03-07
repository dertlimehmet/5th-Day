import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Visitor } from '../../visitor';
import { Publish } from '../../publish';
import { ContentType } from '../../content-type';
import { EmailValidator } from '../../email-validator';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css'],
})
export class VisitorComponent {
  constructor(private formBuilder: FormBuilder) {}

  newVisitor: Visitor | undefined = undefined;

  public visitorForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, EmailValidator()]],
    birthDate: ['', [Validators.required]],
    content: ['', [Validators.required,Validators.minLength(50)]],
    contentType: ['', [Validators.required]],
    publish: [''],
  });

  publishList: Publish[] = [
    { id: 1, text: '1 Ay' },
    { id: 2, text: '3 Ay' },
    { id: 3, text: '6 Ay' },
  ];

  contentTypeList: ContentType[] = [
    { id: 1, text: 'Eleştiri' },
    { id: 2, text: 'Öneri' },
  ];

  save() {
    this.newVisitor = this.visitorForm.value as Visitor;
    console.log(this.newVisitor);
  }

  isInvalid(controlName: string): boolean {
    let control = this.visitorForm.get(controlName)!;
    if (!(control.invalid && (control.dirty || control.touched))) return false;

    if (control.errors?.['required']) return true;
    if (control.errors?.['emailFormat']) return true;
    if(control.errors?.['minlength']) return true;

    return false;
  }

  isValid(controlName: string) {
    let control = this.visitorForm.get(controlName)!;
    return control.valid && (control.dirty || control.touched);
  }

  getControl(controlName: string) {
    return this.visitorForm.get(controlName)!;
  }

  isInvalidControl(controlName: string, validationName: string) {
    return this.getControl(controlName).errors?.[validationName];
  }
}
