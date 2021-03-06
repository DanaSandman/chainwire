import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/'

export const httpService = {
    get(endpoint, data) {
        console.log('httpService get');
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint) {
        return ajax(endpoint, 'DELETE')
    }
};

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        console.log('ajax data',data);
        console.log('BASE_URL',BASE_URL);
        console.log('method',method);
        
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null
        })
        console.log('res.data',res.data);
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            // window.location.assign('/#/login')
            throw err
        }
    }
};

