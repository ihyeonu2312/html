let number = 20;
// 14[16] 10100[2]

let binaryNumber = number.toString(2);
let hexNumber = number.toString(16);
console.log(binaryNumber, hexNumber);

let result = parseInt(binaryNumber, 2); //  parseInt >>  정수로 변환
console.log(result);

const str = "가나다라가나다라가나다라";
console.log(str.charAt(2), str[2]);
console.log(str.slice(1, 3), str.substring(1, 3) ,str.substr(1,3)); // slice substirng 이상 미만, substr 이상 이하
console.log(str.replace('가','마'),str.replaceAll('가','마')) // 마나다라가나다라가나다라 마나다라마나다라마나다라

// charCodeAt(idx) // charCodeAt 은 문자열중 하나를 선택하여 아스키코드 번호로 변환해주는 함수
// 11172
// console.log(588 * 19);

let s = "";
for(let i = 0 ; i < 26 ; i++ ){
    s += String.fromCharCode(65+i); // fromCharCode 는 아스키코드번호를 받아 문자열을 구성해주는 함수입니다.
}
console.log(s.charCodeAt(0));

const arr = [10,20,3,40,5]; // const 업데이트 재선언 불가능
arr.sort((a,b) => a - b);
arr.sort(function(a,b){
    return b - a;
})
console.log(arr);

// for in
// for of
for(let i of arr) {
    console.log(i);
}

const multi = [
    [1,2,3,4],
    [3,4,5],
    [2,3,4]
];

for(let i in multi) {
    for(let j in multi[i]) {
        console.log(multi[i][j]);
    }
}

for(let sub of multi) {
    for(let value of sub) {
        console.log(value);
    }
}
// for...of 는 배열의 반복에서 사용되고,
// for...in은 객체의 반복에서 사용된다.

