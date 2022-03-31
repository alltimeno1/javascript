// https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
    let days = progresses.map((work, idx) => Math.ceil((100 - work) / speeds[idx]));
    let answer = [0];
    let firstProgress = days[0];
    
    for (let i = 0, j = 0; i < days.length; i++) {
        if (days[i] <= firstProgress) {
            answer[j] += 1;
        } else {
            firstProgress = days[i];
            answer[++j] = 1;
        }
    }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

function solution(priorities, location) {
    let list = priorities.map((priority, location) => ({ priority, location }))
    let result = [];
    
    while (list.length) {
        const firstItem = list.shift();
        
        if (list.find(item => item.priority > firstItem.priority)) {
            list.push(firstItem)
        } else {
            result.push(firstItem);
        }
    }
    
    const answer = result.findIndex((item) => item.location === location) + 1;
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42862#

function solution(n, lost, reserve) {
    let list = [...new Array(n)].map(n => 1);
    
    lost.forEach(id => list[id - 1] -= 1);
    reserve.forEach(id => list[id - 1] += 1);
    
    for(let i = 0; i < list.length; i++) {
        if (list[i] == 2 & list[i - 1] == 0) {
            list[i] -= 1;
            list[i - 1] += 1;
        } else if (list[i] == 2 & list[i + 1] == 0) {
            list[i] -= 1;
            list[i + 1] += 1;
        }
    }
    
    return list.filter(n => n).length
}

// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    const total = brown + yellow;
    let list = [];
    
    for (let y = 3; y <= Math.sqrt(total); y++) {
        const x = total / y
        if (!(total % x) && (x - 2) * (y - 2) == yellow) {
            return [x, y];
        }
    }
}
