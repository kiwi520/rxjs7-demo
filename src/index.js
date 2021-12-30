import {fromEvent, map, switchMap, from, debounceTime, distinctUntilChanged} from "rxjs";

import axios from "axios";

const search = document.getElementById('search');

fromEvent(search,"keyup")
        .pipe(
                debounceTime(2000), //防抖
                map(event=>event.target.value),
                distinctUntilChanged(), //关键词一致的话忽略请求
                switchMap(key => {
                   return  from(axios.get(`http://yapi.smart-xwork.cn/mock/99626/categories?q=${key}`)).pipe(
                           map(res=>res.data)
                   )
                })
        )
        .subscribe(console.log)
