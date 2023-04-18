import Axios from 'axios';
Axios.defaults.baseURL = 'https://api.apilayer.com/exchangerates_data';
Axios.defaults.headers['apikey'] = 'Ae6O5TTSBAKbNaeF0Q9knpy1yK16RC71';

export default {
    getAllCurrencies(){
        return Axios.get('/symbols')
    },
    convertCurrencies(selectedCurrencyTo,selectedCurrencyFrom,InputCurrencyAmount){
        return Axios.get(`convert?to=${selectedCurrencyTo}&from=${selectedCurrencyFrom}&amount=${InputCurrencyAmount}`)
    }
}