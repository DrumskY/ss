import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsBHComponent } from './orders-details-bh.component';

describe('OrdersDetailsBHComponent', () => {
  let component: OrdersDetailsBHComponent;
  let fixture: ComponentFixture<OrdersDetailsBHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsBHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsBHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
