import {fromEvent, map, switchMap, takeUntil} from "rxjs";

const box = document.getElementById('box')

// box.onmousedown = function (event) {
//     let distanceX = event.clientX - event.target.offsetLeft;
//     let distanceY = event.clientY - event.target.offsetTop;
//
//     document.onmousemove = function (e){
//         console.log('e.clientX')
//         console.log(e.clientX)
//         console.log('e.clientX')
//         console.log('e.clientY')
//         console.log(e.clientY)
//         console.log('e.clientY')
//         let positionX = e.clientX-distanceX
//         let positionY = e.clientY-distanceY
//
//         box.style.left = positionX + "px"
//         box.style.top = positionY + "px"
//
//
//         box.onmouseup = function (){
//             document.onmousemove = null
//         }
//     }
// }


fromEvent(box, "mousedown").pipe(
        map(function (event) {
            return {
                distanceX: event.clientX - event.target.offsetLeft,
                distanceY: event.clientY - event.target.offsetTop
            }
        }),
        switchMap(({distanceX, distanceY}) => {
            // console.log({distanceX,distanceY})
            return fromEvent(document, "mousemove").pipe(
                    map(event => ({
                        left: event.clientX - distanceX,
                        top: event.clientY - distanceY
                    })),
                    takeUntil(fromEvent(box,'mouseup'))  // 暂停数据流传送
            )
        })
).subscribe(function ({left, top}) {
    box.style.left = left + 'px'
    box.style.top = top + "px"
})
