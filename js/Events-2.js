console.log('Events Advanced');
let btn = document.getElementById("btn");// target element
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown', func3);
function func1(e) {
    console.log("T.Y.Single click", e);
    e.preventDefault();
}

function func2(e) {
    console.log("Double click", e);
    e.preventDefault();
}

function func3(e) {
    console.log("mousedown click", e);
    e.preventDefault();
}
document.querySelector('.no').addEventListener // mouseEnter Event
    ('mouseenter', function () {
        console.log('Mouseenter');
    });
document.querySelector('.no').addEventListener //mouseLeave Event
    ('mouseleave', function () {
        console.log('MouseLeave')

    });
document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX);
    console.log(e.offsetY)
    console.log('MouseMove');
    document.body.style.backgroundColor =  `rgb(${e.offsetX},${e.offsetX},${e.offsetX},
        ${e.offsetY})`;
});  //MouseMove 