const { log } = require('console');
const fs = require('fs');
const filePath = 'input.day3.txt';

function getNumericValue(char) {
    if (char >= 'a' && char <= 'z') {
        
        return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    } else if (char >= 'A' && char <= 'Z') {
       
        return char.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
    } else {
       
        return -1; 
    }
}

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const lines = data.split('\n');
    const commonCharacter =[]

    for (const line of lines) {
        const trimmedLine = line.trim();


        if (trimmedLine.length > 0) {
            const characters = trimmedLine.split('');           
        
        const midpointIndex = Math.ceil(characters.length / 2);
            const firstHalf = characters.slice(0, midpointIndex);
            const secondHalf = characters.slice(midpointIndex);
      
            function findCommonCharacter(firstHalf, secondHalf){ 
            const commonChars = [];
            for(let i = 0; i < firstHalf.length; i++){
                for (let j = 0; j < secondHalf.length; j++){
                    if (firstHalf[i]=== secondHalf[j] && !commonChars.includes(firstHalf[i])){
                       
                        commonChars.push(firstHalf[i])
                        
                    }
                }
            }
            return commonChars
            
        }
        const commonCharacterInLine = findCommonCharacter(firstHalf,secondHalf)
        commonCharacter.push(...commonCharacterInLine)
      
        } 
    }

    const numericValues = commonCharacter.map(char=> getNumericValue(char))
    const sum = numericValues.reduce((acc,value)=> acc+value, 0)
  

});
