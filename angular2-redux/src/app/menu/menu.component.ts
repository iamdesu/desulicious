import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { ADD_FOOD } from '../actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu:any[];

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.menu = [];

    this.menu.push({
      name: "Fried Fries",
      price: 20,
      image: '/assets/img/fried-fries.jpg'
    });

    this.menu.push({
      name: "Lemon Rice",
      price: 18,
      image: '/assets/img/lemon-rice.jpg'
    });

    this.menu.push({
      name: "Spaghetti",
      price: 22,
      image: '/assets/img/pasta-spaghetti.jpg'
    });
  }

  addFood(food) {
    this.ngRedux.dispatch({ type: ADD_FOOD, newFood: food });
  }

}
