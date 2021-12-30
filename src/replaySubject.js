const { ReplaySubject} = require('rxjs')

const replaySubject = new ReplaySubject()


replaySubject.subscribe((v)=>{
    console.log(v)
})

replaySubject.next("Hello 1")
replaySubject.next("Hello 2")

setTimeout(()=>{
    replaySubject.subscribe({
        next:function (value) {
            console.log(value)
        }
    })
},3000)
