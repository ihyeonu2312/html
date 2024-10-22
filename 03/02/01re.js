var arr = ["qwer", false, 4321, "아으지리"];
console.log(arr.length);

var arr2 = new Array(10);
console.log(arr2);
console.log(arr2[1]);

var arr3 = arr.slice(2,3);
console.log(arr);
console.log(arr3);

var str = "1*2*3*4*5";
arr = str.split("*");
console.log(arr);
str = arr.join("#");
console.log(str);

arr = ["a","p","p","l","e"];
arr2 = ["w","a","t","c","h"];

var arr3 = arr.concat(arr2);
console.log(arr3.toString());

console.log(f(6));
function f(x) {
    return x * x;
}
console.log(f(3));

var f2 = function(x) {
    return x * x;
}
console.log(f2(4));

function process() {
    var kor = 70;
    var eng = 60;
    var mat = 50;
    var avg = (kor + eng + mat) / 3;
    return avg;
}
console.log(process());

function max(a, b, c) {
    if(a>b && a>c){
        return a;
    }else if (b>a && b>c){
        return b;
    }else{
        return c;
    }
}
console.log(max(16,10,2));

