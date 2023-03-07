import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function EmailValidator(): ValidatorFn {
  var validationFunction = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const hasSign = /[@+]/.test(value);
    const hasDot = /[.+]/.test(value);

    const isValid = hasDot && hasSign;

    return isValid ? null : { emailFormat: true };
  };
  return validationFunction;
}
