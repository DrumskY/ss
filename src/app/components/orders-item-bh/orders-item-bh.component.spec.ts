import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemBHComponent } from './orders-item-bh.component';

describe('OrdersItemBHComponent', () => {
  let component: OrdersItemBHComponent;
  let fixture: ComponentFixture<OrdersItemBHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemBHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemBHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
