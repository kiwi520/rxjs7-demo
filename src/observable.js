const {Observable} = require('rxjs')

const observable = new Observable(function (observer){
    let index = 0
    let times = setInterval(function () {
        observer.next(index++)
        if (index === 5){ //如果index走的5，停止获取
            observer.complete()
            clearInterval(times)
        }else if (index ===4) {
            observer.error('错误') 
        }
    },1000)
})

observable.subscribe({
    next:function (value) {
        console.log(value)
    },
    complete:function () {
        console.log('终止了')
    },
    error:function (error) {
        console.log(error)
    }
})
