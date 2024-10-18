var s = {x:10, z:true, no:10};

s.no = 20;
s.name = "이재용";
s.kor = 80;
s.eng = 80;
s.mat = 60;
s.total = function() {
    return this.kor + this.eng + this.mat;
}

// console.log(s.no);
// // 필드 제거 : delete
// delete s.no;
// console.log(s);
// console.log(s.no);
// console.log(s.total());


// typeof연산자 : 단항, 대상 피연산자의 타입을 문자열로 반환
var num = 10;
// num = "10";
// num = Boolean(String(num)); // 문자열 10 ->true , boolean


num = "0";
num /= 1; // 타입 변환

// 문자열 <<>> 숫자
num = !!num;
// boolean >> 문자열
// boolean >> 숫자

// 문자열만들기 : 빈문자열 붙이기
// 숫자만들기 : 산술연산 처리
// 논리만들기 : 이중 부정

// 다른 데이터 타입이 논리 연산중 false가 오는 경우
// 문자열 >> 빈문자열
// 숫자 >> 0
// 객체 >> null
// 함수 >> 

console.log(num, typeof num);
console.log(3/0, 0/0);
var num = 10;
for(var i = 0 ; i-- ; ) {

}

function f(x) {
    x();
}

// f(10);

// 10();

function call(){
    var x = 10;
    console.log("call")

}
f(call);

function f2() {
    return() => {
        console.log("haha");
    }
}

f2()();
  