import { Component } from '@angular/core';
import { Product } from '../product';
import { FormBuilder } from '@angular/forms';
import { CategoryMenu } from '../category-menu';
import { Publish } from '../publish';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private formBuilder: FormBuilder) {}

  newProduct: Product | undefined = undefined;

  public productForm = this.formBuilder.group({
    name: [''],
    price: [''],
    category: [''],
    publish: [''],
    isPublish: [true],
  });

  categoryMenuList: CategoryMenu[] = [
    { id: 1, text: 'Kalemler' },
    { id: 2, text: 'Defterler' },
    { id: 3, text: 'Silgiler' },
  ];

  publishMenuList: Publish[] = [
    { id: 1, text: '1 ay' },
    { id: 2, text: '2 ay' },
    { id: 3, text: '3 ay' },
  ];

  save() {
    this.newProduct = this.productForm.value as Product;
    console.log(this.newProduct);
  }
}
