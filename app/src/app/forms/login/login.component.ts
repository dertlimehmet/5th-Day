import { Component } from '@angular/core';
import { Login } from 'src/app/models/login';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../../validations/email-validator';
import { passwordValidator } from '../../validations/password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  newLogin: Login | undefined = undefined;

  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required,emailValidator()]],
    password: [0, [Validators.required,passwordValidator()]],
  });

  constructor(private formBuilder: FormBuilder) {}

  loginUser() {
    if (this.loginForm.invalid) {
      alert('Tüm alanları doldurunuz!');
      return;
    }
    this.newLogin = this.loginForm.value as Login;

    console.log(this.newLogin);
  }

  isInvalid(controlName: string): boolean {
    let control = this.loginForm.get(controlName)!;

    if (!(control.invalid && (control.dirty || control.touched))) return false;
    if (control.errors?.['required']) return true;
    if (control.errors?.['emailFormat']) return true;
    if (control.errors?.['passwordFormat']) return true;

    return false;
  }

  isValid(controlName: string) {
    let control = this.loginForm.get(controlName)!;
    return control.valid && (control.dirty || control.touched);
  }

  getControl(controlName: string) {
    return this.loginForm.get(controlName)!;
  }

  isInvalidControl(controlName: string, validationName: string) {
    return this.getControl(controlName).errors?.[validationName];
  }
}
