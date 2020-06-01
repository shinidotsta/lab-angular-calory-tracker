import { Component, OnInit } from '@angular/core';
import { Foods } from './../food';
import { Fooddetail } from './../Fooddetail';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  Foods: Fooddetail[];
  newFood : any ={};
  container :boolean=true;

  ngOnInit() {
    this.Foods=Foods;
  }
  addFood(newFood) :any {
    this.Foods.push(newFood);
  }

}
