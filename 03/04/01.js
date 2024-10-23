const now = new Date();
console.log(now);
console.log(now.getFullYear(), now.getMonth()+1, now.getDate()); // 년 월 일
console.log(now.getHours(), now.getMinutes()+1, now.getSeconds()); // 시 분 초
console.log(now.getTime(), now.getDay());

// getDay를 사용하여 현재의 요일을 한글로 출력 0~6

const date = now.getDay();
console.log(now.getDay());
console.log(date);

let day;

switch (date) {
    case 0: day = "일요일"
        
        break;
    case 1: day = "월요일"
        
        break;
    case 2: day = "화요일"
        
        break;
    case 3: day = "수요일"
        
        break;
    case 4: day = "목요일" 
        
        break;
    case 5: day = "금요일" 
        
        break;
    case 6: day = "토요일" 
        
        break;
    default:
        break;

    }
console.log(day);

const days = ['일','월','화','수','목','금','토'];

console.log(days[date] + "요일");
console.log(now.getTimezoneOffset());