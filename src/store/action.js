import {
    exService
} from '../services/ex.service.js';

export function updateStartDate(data) {
    return async dispatch => {
        try {
            dispatch({
                type: 'SET_START_DATE',
                data
            });
        } catch (err) {
            console.log('Actions: err in set date', err);
        }
    };
}
export function updateEndDate(data) {
    return async dispatch => {
        try {
            dispatch({
                type: 'SET_END_DATE',
                data
            });
        } catch (err) {
            console.log('Actions: err in set date', err);
        }
    };
}
export function getRangeEx(exParams) {

    return async dispatch => {
        try {
            
            // if(exParams){
            console.log('currencyService action',exParams._startDate, exParams._endDate, exParams._baseCurrency, exParams._currencies);
            let data = await exService.getRangeEx(exParams._startDate, exParams._endDate, exParams._baseCurrency, exParams._currencies);
            console.log('data',data);
         
            dispatch({
                type: 'SET_RANGE_DATA',
                data
            });
        } catch (err) {
            console.log('Actions: err in set data', err);
        }
    };
}
