import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersBHComponent } from './orders-bh.component';

describe('OrdersBHComponent', () => {
  let component: OrdersBHComponent;
  let fixture: ComponentFixture<OrdersBHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersBHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersBHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
