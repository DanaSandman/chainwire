const axios = require('axios');
const dbService = require('../../service/db.service.js')
const util = require('../../service/util.js')

async function getCurrencyDataByRange(_startDate, _endDate, _baseCurrency, _currencies){
    const currencyData = [];
    const currDate = new Date(_startDate);
    const endDate = new Date(_endDate);
    let currDateS = ""
    const endDateS = endDate.toISOString().slice(0, 10);
    let data = {}
    const filterBy = {
        pair: `${_baseCurrency}/${_currencies}`,
        date: {
            $gte: currDateS,
            $lt: endDateS,
        }
    }
    const dataFromDB = await query(filterBy)

    while (currDate <= endDate) {
        currDateS = currDate.toISOString().slice(0, 10);
        data = dataFromDB.find( ({ date }) => date === currDateS );

        if (data){
            currencyData.push(data)
        }else{
        currencyData.push(await getCurrency(currDate, _baseCurrency, _currencies)) 
        }
        currDate.setDate(currDate.getDate()+1);
    }
    return currencyData
};
//LIST
async function query(filterBy) {
    try {
        const collection = await dbService.getCollection('ex')
        let res = await collection.find(filterBy).toArray()
        return res
    } catch (err) {
        throw err
    }
};
//ADD
async function save(ex) {
    try {
        const exToAdd = ex
        exToAdd._id = util.makeId();
        const collection = await dbService.getCollection('ex')
        await collection.insertOne(exToAdd)
        const exs = await query();
        return exs;
    } catch (err) {
        throw err
    }
}

//API Currency
async function getCurrency(_date, _baseCurrency, _currencies) {
    const currDateS = _date.toISOString().slice(0, 10);
        const data = {
            "apikey": 'vBoxrChwVTKV86vZIJXw2jpUqr8JJ1AAN27ZAGP8',
            "date": `${currDateS}`,
            "base_currency": `${_baseCurrency}`,
            "currencies": `${_currencies}`
        }
        const endpoint = "https://api.currencyapi.com/v3/historical";     
        const exData = await axiosReq(endpoint, 'GET', data)

        const dataToSave = {
            pair: `${_baseCurrency}/${_currencies}`,
            date: exData.meta.last_updated_at.toString().slice(0, 10),
            value: exData.data[_currencies].value,        
};
    save(dataToSave)
    return dataToSave
}
async function axiosReq(endpoint, method = 'GET', data = null) {
        try {
            const res = await axios({
                url: `${endpoint}`,
                method,
                data,
                params: (method === 'GET') ? data : null
            })
            return res.data
        } catch (err) {
            console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
            console.dir(err)
            if (err.response && err.response.status === 401) {
                throw err
            }
        }
};

module.exports = {
    getCurrencyDataByRange,
    query,
}













