import axios from '../axios-menu';


export const SAVE_DISH = 'SAVE_DISH';
export const DELETE_DISH = 'DELETE_DISH';
export const FETCH_DISH_REQUEST = 'FETCH_DISH_REQUEST';
export const FETCH_DISH_SUCCESS = 'FETCH_DISH_SUCCESS';
export const FETCH_DISH_ERROR = 'FETCH_DISH_ERROR';




export const saveDish = (e, pizzas) => {
    e.preventDefault();
    return (dispatch, getState) => {
        dispatch(fetchDishRequest());
        axios.post('/pizzas.json', {pizzas: pizzas}).then(() => {
           dispatch(fetchDish());
        });
    }
};
export const deleteDish = (id) => {
    console.log(id)
    return (dispatch) => {
        dispatch(fetchDishRequest());
        axios.delete(`/pizzas/${id}.json`).then(() => {
            dispatch(fetchDish());
        })
    }
};
export const fetchDishRequest = () => {
    return {type: FETCH_DISH_REQUEST}
};

export const fetchDishSuccess = (pizzas) => {
    return {type: FETCH_DISH_SUCCESS, pizzas}
};
export const fetchDishError = () => {
    return {type: FETCH_DISH_ERROR}
};

export const fetchDish = () => {
    return dispatch => {
        dispatch(fetchDishRequest());
        axios.get('/pizzas.json').then(response => {
            console.log(response.data);
            dispatch(fetchDishSuccess(response.data));
        }, error => {
            dispatch(fetchDishError());
        });
    }
};