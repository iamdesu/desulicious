import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { ADD_FOOD, REMOVE_FOOD } from '../actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  @select() foods;
  @select() totalPrice;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
  }

  removeFood(food) {
    this.ngRedux.dispatch({ type: REMOVE_FOOD, food: food });
  }

}
