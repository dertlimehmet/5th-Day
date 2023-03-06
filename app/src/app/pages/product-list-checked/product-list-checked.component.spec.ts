import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListCheckedComponent } from './product-list-checked.component';

describe('ProductListCheckedComponent', () => {
  let component: ProductListCheckedComponent;
  let fixture: ComponentFixture<ProductListCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListCheckedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
