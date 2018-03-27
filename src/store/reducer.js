import {FETCH_DISH_ERROR, FETCH_DISH_REQUEST, FETCH_DISH_SUCCESS, SAVE_DISH} from "./action";


const initialState = {
  pizzas: {},
  loading: false
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
      case SAVE_DISH:
        return {...state, pizzas: action.pizzas};
      case FETCH_DISH_REQUEST:
        return {...state, loading: true};
      case FETCH_DISH_SUCCESS:
        return {...state, pizzas: action.pizzas || {}, loading: false};
      case FETCH_DISH_ERROR:
        return {...state, loading: false};
      default:
        return state;
  }
};

export default reducer;