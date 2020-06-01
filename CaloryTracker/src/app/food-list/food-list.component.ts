import { Component, OnInit } from '@angular/core';
import { Foods } from './../food';
import { Fooddetail } from './../Fooddetail';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit  {

  Foods: Fooddetail[];

  ngOnInit(): void {
    this.Foods = Foods;
  }

  addCount(count,Food):any
  {
    Food.count +=parseInt(count);
  }
}
