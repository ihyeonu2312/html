//생성자
function Student(no,name,kor,eng,mat){
    this.no=no;
    this.name=name;
    this.kor=kor;
    this.eng=eng;
    this.mat=mat;
}

Student.prototype.total = function(){
    return this.kor+this.eng+this.mat;
};

const s1 = new Student(1,'새똥이',100,100,100);
console.log(s1.total());
//list.remove(index) 리스트에서 인덱스 지우기

const arr = [1,2,3,4,5];
//arr.splice(1,3); //splice중간제거 및 중간삭제 및 중간 추가 가능
//arr.splice(1,3,10,20);

Array.prototype.remove = function(index){
    this.splice(index,1);//내가 받은 인덱스를 받을거다
}
arr.remove(3);//arr의 3번 인덱스를 삭제하겠다.

console.log(arr);


Array.prototype.add=function(index){ //추가 기능 만들기
    this.push(5);
}
arr.add(1);
console.log(arr);

//맵을 항상 포문으로 돌린 이유가 인덱스가 없어서 그렇고 키셋 엔트리셋으로 돌림
//예:for(let i key값 : in obj 순환 대상)
//i는 key값
//x:10 y:20에 키는 x,y

for(let i in s1){
    if(i=='name'){
        s1[i]='소똥이';
    }
    console.log(i,s1[i]);

}

for(let i in arr){
    console.log(i,arr[i]);
}

//in operator
console.log('name' in s1);//s1이 name을 포함하고 있습니까?
console.log('addr' in s1);

for(let i in "abcde"){
    console.log(i, "abcde"[i]);

}