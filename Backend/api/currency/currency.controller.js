const currencyService = require('../currency/currency.service');

module.exports = {
    getRange,
}
async function getRange(req, res) {
    try {
        var data = req.body
        console.log('currency controller service data', data);
        var currData = await currencyService.getCurrencyDataByRange(data._startDate, data._endDate, data._baseCurrency, data._currencies)
        res.send(currData)
    } catch (err) {
        res.status(500).send({
            err: 'Failed to get getRange'
        })
    }
}
