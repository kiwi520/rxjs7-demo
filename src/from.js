const {from} = require("rxjs");

//数组
// from(["a","b","c"]).subscribe(console.log)

function p(){
    return new Promise(function (resolve){
        setTimeout(function () {
            resolve({a:1})
        },2000)
    })
}

from(p()).subscribe(console.log)



