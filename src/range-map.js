const {range} = require("rxjs");
const {map} = require("rxjs/operators");

range(1,10)
        .pipe(map(n=> n* 10))
        .subscribe(function (v) {
            console.log(v)
        })
