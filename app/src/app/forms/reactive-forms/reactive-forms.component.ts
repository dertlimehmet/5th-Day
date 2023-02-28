import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { CategoryMenu } from '../../models/category-menu';
import { PublishMenu } from '../../models/publish-menu';
import { barcodeValidator } from '../../validations/barcode-validator';
import { PublishStartEndDateValidator } from '../../validations/publish-start-end-date-validator';
import { PostServiceService } from './post-service.service';
import { ExistProductNameValidator } from '../../validations/exist-product-name-validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  newProduct: Product | undefined = undefined;
  public productForm = this.formBuilder.group(
    {
      name: [
        '',
        {
          Validators: [Validators.required, Validators.min(5)],
          asynValidators: [ExistProductNameValidator(this.postService)],
        },
      ],
      price: [
        '',
        [Validators.required, Validators.min(100), Validators.max(1000)],
      ],
      stock: [
        '',
        [Validators.required, Validators.min(10), Validators.max(50)],
      ],
      category: ['', Validators.required],
      publish: ['1'],
      isPublish: [false],
      barcode: [
        '',
        {
          Validators: [Validators.required, barcodeValidator()],
          updateOn: 'change',
        },
      ],
      publishStartDate: [new Date(), [Validators.required]],
      publishEndDate: [new Date(), [Validators.required]],
    },
    {
      validators: [PublishStartEndDateValidator()],
    }
  );

  categoryMenuList: CategoryMenu[] = [
    { id: 1, text: 'Kalemler' },
    { id: 2, text: 'Defterler' },
    { id: 3, text: 'Silgiler' },
  ];

  publishMenuList: PublishMenu[] = [
    { id: 1, text: '3 ay' },
    { id: 2, text: '6 ay' },
    { id: 3, text: '9 ay' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostServiceService
  ) {
    this.postService.searchByProductName('sunt').subscribe((x) => {
      console.log(x);
    });

    this.productForm.get('barcode')?.valueChanges.subscribe((x) => {
      console.log(x);
    });
  }

  save() {
    this.newProduct = this.productForm.value as Product;

    console.log(this.newProduct);
  }

  isInvalid(controlName: string): boolean {
    let control = this.productForm.get(controlName)!;
    if (!(control.invalid && (control.dirty || control.touched))) return false;

    if (control.errors?.['required']) return true;
    if (control.errors?.['minlength']) return true;
    if (control.errors?.['maxlength']) return true;
    if (control.errors?.['max']) return true;
    if (control.errors?.['min']) return true;
    if (control.errors?.['barcodeFormat']) return true;

    return false;
  }

  isValid(controlName: string) {
    let control = this.productForm.get(controlName)!;
    return control.valid && (control.dirty || control.touched);
  }

  getControl(controlName: string) {
    return this.productForm.get(controlName)!;
  }

  isInvalidControl(controlName: string, validationName: string) {
    return this.getControl(controlName).errors?.[validationName];
  }
}
