import {range, take} from "rxjs";

console.log('rxjs')

range(1,10)
        .pipe(
                take(5)
        )
        .subscribe(console.log)


console.log('rxjs')
