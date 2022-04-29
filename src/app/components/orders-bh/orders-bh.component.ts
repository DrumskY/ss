import { Component, OnInit } from '@angular/core';
import {BHDataService} from "../../service/bh-data.service";

@Component({
  selector: 'app-orders-bh',
  templateUrl: './orders-bh.component.html',
  styleUrls: ['./orders-bh.component.css']
})
export class OrdersBHComponent implements OnInit {

  public items$: any;

  constructor(private service: BHDataService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    })
  }

}
