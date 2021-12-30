import {fromEvent, debounceTime} from "rxjs";

console.log('rxjs')

fromEvent(document,'click')
        .pipe(
                debounceTime(2000)
        )
        .subscribe(console.log)


console.log('rxjs')
