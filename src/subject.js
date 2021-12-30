const {Subject} = require('rxjs')

const demoSubject = new Subject()

demoSubject.subscribe({
    next: function (v) {
        console.log(v)
    }
})

demoSubject.subscribe({
    next: function (v) {
        console.log(v)
    }
})

setTimeout(function () {
    demoSubject.next("hello")
},2000)
