import { of, distinctUntilChanged} from "rxjs";

console.log('rxjs')

of(1,1,2,3,4,5,6,6,7,8,8)
        .pipe(
                distinctUntilChanged() // 过滤掉相同的Observable
        )
        .subscribe(console.log)


console.log('rxjs')
