import {fromEvent, interval, switchMap} from "rxjs";

fromEvent(document, 'click')
        .pipe(switchMap(event => interval(1000)))
        .subscribe(console.log);
