
const { log } = require('console');
const fs = require ('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
const lines = data.split('\n');
let totalScore = 0
let totalScore1=0
let totalScore2=0
let totalScore3=0
let totalScore4=0
let totalScore5 =0
let totalScore6 =0
let totalScore7 =0
let totalScore8 =0
let totalScore9 = 0


for(const line of lines) {
    const parts = line.trim().split(' ');  
   

    if (parts[0]=== 'A' && parts[1]=== 'Y'){
        totalScore1+=8
    }
    else if (parts[0]=== 'B' && parts[1]=== 'X'){
        totalScore2+=1
    }
    else if (parts[0]=== 'C'  && parts[1]=== 'Z'){
        totalScore3+=6
    } else if (parts[0]=== 'A'  && parts[1]=== 'X'){
        totalScore4+=4
    }
    else if (parts[0]=== 'A'  && parts[1]=== 'Z'){
        totalScore5+=3
    }
    else if (parts[0]=== 'B' && parts[1]=== 'Y'){
        totalScore6+=5
    }
    else if (parts[0]=== 'B' && parts[1]=== 'Z'){
        totalScore7+=9
    }
    else if (parts[0]=== 'C'  && parts[1]=== 'X'){
        totalScore8+=7
    }
    else if (parts[0]=== 'C'  && parts[1]=== 'Y'){
        totalScore9+=2
    }
}

console.log(totalScore);


});