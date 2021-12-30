const {Observable, map} = require('rxjs')

const users = {
    data: [
        {
            status: "active",
            age: 14
        },
        {
            status: "inactive",
            age: 18
        }, {
            status: "active",
            age: 32
        }, {
            status: "active",
            age: 15
        }, {
            status: "inactive",
            age: 54
        }, {
            status: "active",
            age: 23
        },
    ]
}

const observable = new Observable((subscriber) => {
    subscriber.next(users)
}).pipe(
        map((value)=>{
            console.log(value)
            return value.data
        }),
        map((value)=>{
            console.log(1)
            console.log(value)
            return value
        }),
        map((value)=>{
            console.log(2)
            console.log(value)
            return value.filter(user => user.status ==="active")
        }),
        map((value)=>{
            console.log(3)
            console.log(value)
            return value.reduce((sum,user)=> sum + user.age,0) / value.length
        })
)

const observer = {
    next: (value) => {
        console.log(value)
    },
    error: (error) => {
        console.log('Observer got an error of ' + error)
    },
    complete: () => {
        console.log("Observer got a complete   ")
    }
}

observable.subscribe(observer)
