import { AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { map } from 'rxjs';
import { PostServiceService } from '../forms/reactive-forms/post-service.service';

export function ExistProductNameValidator(
  postService: PostServiceService
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return postService
      .searchByProductName(control.value)
      .pipe(map((x) => (x.length > 0 ? { productExist: true } : null)));
  };
}
