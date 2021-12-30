import {fromEvent, throttleTime} from "rxjs";

console.log('rxjs')

fromEvent(document,'click')
        .pipe(
                throttleTime(2000)
        )
        .subscribe(console.log)


console.log('rxjs')
