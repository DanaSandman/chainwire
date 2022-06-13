import {
    storageService
} from "./ex-storage.service.js";
import {
    httpService
} from "./http.service.js";

const STORAGE_KEY = "ex";

export const exService = {
    getRangeEx
};

async function getRangeEx(_startDate, _endDate, _baseCurrency, _currencies){
   
 const exData = {
    _startDate,
     _endDate,
      _baseCurrency,
       _currencies 
 }
 console.log('exData', exData);
//     // return await storageService.post(STORAGE_KEY, order);
    return httpService.post('ex', exData );
}
