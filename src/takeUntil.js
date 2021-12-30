import { fromEvent, takeUntil} from "rxjs";

console.log('rxjs')

const btn = document.getElementById('btn')

fromEvent(document,'mousemove')
        .pipe(
                // 暂停 docuemt 触发的console.log
                takeUntil(fromEvent(btn,'click'))
        )
        .subscribe(console.log)


console.log('rxjs')
