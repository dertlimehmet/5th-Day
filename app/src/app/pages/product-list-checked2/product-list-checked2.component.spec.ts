import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListChecked2Component } from './product-list-checked2.component';

describe('ProductListChecked2Component', () => {
  let component: ProductListChecked2Component;
  let fixture: ComponentFixture<ProductListChecked2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListChecked2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListChecked2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
