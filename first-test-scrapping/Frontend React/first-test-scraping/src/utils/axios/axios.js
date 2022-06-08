const axios = require('axios');
const urlBase = process.env.URL_API || 'http://localhost:4100/';

const readUrl = ( url = '' ) => url.startsWith('http://') || url.startsWith('http://') ? url : `${urlBase}`

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

const get = ( url = '', options= {} ) => axios.get(readUrl(url), {
    headers: {
        ...headers,
        ...options.headers,
    },
    ...options
})

const apiGet = ( url = '', options = {}) => get(`${urlBase}${url}`, options)


export default {
    apiGet,
}