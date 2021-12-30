const {from, forkJoin} = require("rxjs");
const axios = require("axios");
axios.interceptors.response.use(response=>response.data)
forkJoin({
    categories: from(axios.get('http://yapi.smart-xwork.cn/mock/99626/categories')),
    recommend: from(axios.get('http://yapi.smart-xwork.cn/mock/99626/news/recommend'))
}).subscribe(console.log)
