import { tassign } from 'tassign';
import { ADD_FOOD, REMOVE_FOOD } from './actions';

export interface IAppState {
    foods: any[];
    totalPrice: number
}

export const INITIAL_STATE: IAppState = { 
  foods: [],
  totalPrice: 0
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_FOOD:
            var newFood = {
                id: state.foods.length + 1,
                name: action.newFood.name,
                price: action.newFood.price
            };

            var newtotalPrice = state.totalPrice + newFood.price;

            return tassign(state, {
                foods: state.foods.concat(newFood),
                totalPrice: newtotalPrice
            });

        case REMOVE_FOOD:
            return tassign(state, {
                foods: state.foods.filter(food => food.id !== action.food.id),
                totalPrice: state.totalPrice - action.food.price
            });
    }
    
    return state; 
}