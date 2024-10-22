const arr = [10,20,30,40,50];

// filter, foreach 사용하여 10,30,50  만 출력

// function isEven(value) {
//     return value / 10 % 2 == 1 ;}

// arr.filter(isEven).forEach(function(value, index, Array){
//     console.log(value)
// })

function f(x) {
    return x % 20 != 0;
}
function f2(x) {
    console.log(x);
}
function f3(x) {
    return x ** 2 /10;
}
arr.filter(f).map(f3).forEach(f2);

console.log(arr.filter(x => x % 20 != 0).map(x => x ** 2 / 10) .forEach( x => console.log(x)));

arr
.filter(function(x) {
    return x % 20 != 0
})
.map(function(x) {
    return x ** 2 / 10
})
.forEach (function(x) {
    console.log(x);
})

const arr2 = [1,2,3,4,5];
const result = arr2.reduce(function(acc, cur) {
    console.log(acc);
    return acc+cur;
}, 0);

console.log(result);