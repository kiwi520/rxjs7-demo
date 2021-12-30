import {range, takeWhile} from "rxjs";

console.log('rxjs')

range(1,10)
        .pipe(
                takeWhile(n => n <3)
        )
        .subscribe(console.log)


console.log('rxjs')
