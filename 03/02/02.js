function f(x) {
    return x;
}

console.log(typeof f);
console.log(typeof f());

function myFunc(){
    console.log("핫하");
}
console.log(typeof(myFunc));

f(myFunc)();

// document.addEventListener("click", function() {
//     // click시 할일
// });

// scope
// 지역변수 : 함수내에서 선언한 변수
// 전역변수 : 지역변수가 아닌 변수

// var b = 20; // 전역
function test() {
    // console.log(a);
    // var a = 10;
    // console.log(a);
    // console.log(b);
    b = 30;
}

// console.log(a);
test();
console.log(b);

for(var i = 0; i < 10; i++) {

}
console.log(i);
{
    {
        {
            {
                {
                    {
                        var num = 30;
                    }
                }
            }
        }
    }
}

console.log(num);

function f1() {
    var local = 30;
    function f2() {
        console.log(local);
    }
    f2();
}
f1();

// let
let number = 20;
for(let s = 0; s < 10; s++) {
    console.log(s);
}
// console.log(s);

let fn = function(x) {
    console.log("hello" + x);
}
fn("world");

// final double PI = Math.PI;
// const PI = Math.PI;
// PI = 3.14;

// closure : 지역변수가 함수 종료 후에도 남아 있는 현상
// 클로저 동작의 최소 조건 >> 함수를 리턴
function increaseCount() {
    let n = 0;
    function inner() {
        n++;
        return n;
    }
    return inner;
}

let tmp = increaseCount();
console.log(tmp());
console.log(tmp());
console.log(tmp());


// console.log(increaseCount()());
// console.log(increaseCount()());
// console.log(increaseCount()());

// function f() {
//     f();
// }
// f();

console.log(this);

console.log(Number("123.456abcd1234")); // NaN
console.log(parseInt("123.456abcd1234")); // 123
console.log(parseFloat("123.456abcd1234")); // 123.456

// NaN, Infinity
let nan = NaN;
let posiInfi = Number.POSITIVE_INFINITY;
let negaInfi = Number.NEGATIVE_INFINITY;

console.log(typeof nan);
console.log(typeof posiInfi);
console.log(typeof negaInfi);

console.log(isNaN(nan));
console.log(!!nan);

console.log("====================================");
console.log(isFinite(posiInfi));
console.log(isFinite(negaInfi));

eval("let str = 'hello'; console.log(str);")

// URI, URL 통일된 자원에 대한 정보/장소

// http://www.javaman.com/post/view?no=123
// http://www.javaman.com/search?query=http://www.naver.com
let str = 'http://www.javaman.com/search?query=http://www.네이버.com#abcd';
console.log(encodeURI(str));
console.log(encodeURIComponent(str));

let resultStr = decodeURIComponent('http%3A%2F%2Fwww.javaman.com%2Fsearch%3Fquery%3Dhttp%3A%2F%2Fwww.%EB%84%A4%EC%9D%B4%EB%B2%84.com%23abcd');
console.log(resultStr);

// 메서드 : 객체에 종속된 함수
let obj = {
    x:10, 
    y:"abcd", 
    z:function() {}
};

class Student {

}
let student = new Student();





