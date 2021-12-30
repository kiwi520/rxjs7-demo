const {fromEvent, map, pluck} = require("rxjs");

const clicks = fromEvent(document, 'click');
clicks
        .pipe(map(event=>event.target))
        .pipe(pluck("target"))
        .subscribe(x => console.log(x));
