var name = '윤석렬';
var age = 60;

var strings = '대통령' + name +"은 나이가" + age + "살 입니다.";
console.log(strings);
strings = `
대통령 ${name}은
    나이가 ${age}살 입니다.
    `;
// console.log(strings);

// var a = 11;
// var b = 25;

// console.log(a+=b);

var a = 10;
var b = "9";

// === 타입, 값 일치
// == 값 일치
// if(a !== b){
//     console.log('핫하')
// }
// console.log(2 ** 3); // 제곱 연산 2*2*2

//배열
// var arr = []; // 배열 리터럴
var arr = new Array(10); // 10개의 공간을 가지는 배열
// var arr = new Array(10,20); // 10과 20을 값으로 가지는 2칸의 배열
arr[0] = 10;
arr[1] = 'abcd';
arr[2] = true;
arr[3] = undefined;
arr[4] = [1,2,3,4];
arr[5] = {x:10,y:20};

console.log(arr[5].y); // 20
arr[5].x = 30;
console.log(arr[5]['x']); // 10
console.log(arr[4][2]);
arr.length = 100;
console.log(arr.length);

console.log(arr);
// arr.length = 2;
// console.log(arr);