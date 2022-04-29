import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-item-bh',
  templateUrl: './orders-item-bh.component.html',
  styleUrls: ['./orders-item-bh.component.css']
})
export class OrdersItemBHComponent implements OnInit {

  @Input() item?: any;
  @Input() id? : string;
  constructor() { }

  ngOnInit(): void {
  }

}
