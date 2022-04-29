import { Component, OnInit } from '@angular/core';
import {BHDataService} from "../../service/bh-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-details-bh',
  templateUrl: './orders-details-bh.component.html',
  styleUrls: ['./orders-details-bh.component.css']
})
export class OrdersDetailsBHComponent implements OnInit {

  public item: any;


  constructor(private service: BHDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = '';
    this.route.paramMap.subscribe((params:any)=>{
      id = params.get('id');
    })

    this.service.getById(id).subscribe((res: any) => {
      this.item = res[0];
    });
  }

}
