import { Component, OnInit } from '@angular/core';
import { Foods } from './../food';
import { Fooddetail } from './../Fooddetail';

@Component({
  selector: 'app-todays',
  templateUrl: './todays.component.html',
  styleUrls: ['./todays.component.scss']
})
export class TodaysComponent implements OnInit {

  Foods: Fooddetail[];

  ngOnInit(): void {
    this.Foods=Foods;
  }

}
