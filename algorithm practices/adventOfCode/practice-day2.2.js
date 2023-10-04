
const fs = require ('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
const lines = data.split('\n');
let totalScore = 0



for(const line of lines) {
    const parts = line.trim().split(' ');  
   console.log(parts);

    if (parts[0]=== 'A' && parts[1]=== 'Y'){
        totalScore+=4
    }
    else if (parts[0]=== 'B' && parts[1]=== 'X'){
        totalScore+=1
    }
    else if (parts[0]=== 'C'  && parts[1]=== 'Z'){
        totalScore+=7
    } else if (parts[0]=== 'A'  && parts[1]=== 'X'){
        totalScore+=3
    }
    else if (parts[0]=== 'A'  && parts[1]=== 'Z'){
        totalScore+=8
    }
    else if (parts[0]=== 'B' && parts[1]=== 'Y'){
        totalScore+=5
    }
    else if (parts[0]=== 'B' && parts[1]=== 'Z'){
        totalScore+=9
    }
    else if (parts[0]=== 'C'  && parts[1]=== 'X'){
        totalScore+=2
    }
    else if (parts[0]=== 'C'  && parts[1]=== 'Y'){
        totalScore+=6
    }
}

console.log(totalScore);


});