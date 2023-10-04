const fs = require('fs');
const filePath = 'input.day3.txt';

function getNumericValue(char) {
    if (char >= 'a' && char <= 'z') {
        return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    } else if (char >= 'A' && char <= 'Z') {
        return char.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
    } else {
        return 0;
    }
}

const commonCharacter = [];
const totalAll = []

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const lines = data.split('\n');
    const groupSize = Math.ceil(lines.length / 3);
    const groups = [];

    for (let i = 0; i < 3; i++) {
        const groupLines = lines.slice(i * groupSize, (i + 1) * groupSize);
        const cleanedGroups = groupLines.map(line => line.trim());
        groups.push(cleanedGroups);
    }

    const group1 = groups[0];
    const group2 = groups[1];
    const group3 = groups[2];

    function findCommonCharacter1(group) {
        const commonChars = []
        const firstLine = group[0].trim(); // Take the first line as the reference
    
        for (let j = 0; j < firstLine.length; j++) {
            const charToCheck = firstLine.charAt(j);        
                commonChars.push(charToCheck);
                
        }
    
        return commonChars;
        
    }
    function findCommonCharacter2(group) {
        const commonChars = []
        const firstLine = group[1].trim(); // Take the first line as the reference
    
        for (let j = 0; j < firstLine.length; j++) {
            const charToCheck = firstLine.charAt(j);        
                commonChars.push(charToCheck);
                
        }
    
        return commonChars;
        
    }
    function findCommonCharacter3(group) {
        const commonChars = []
        const firstLine = group[2].trim(); // Take the first line as the reference
    
        for (let j = 0; j < firstLine.length; j++) {
            const charToCheck = firstLine.charAt(j);        
                commonChars.push(charToCheck);
                
        }
    
        return commonChars;
        
    }
   
const commonCharacterInGroup1 = findCommonCharacter1(group1);
const commonCharacterInGroup2 = findCommonCharacter2(group2);
const commonCharacterInGroup3 = findCommonCharacter3(group3);


    
    // console.log('comm1', commonCharacterInGroup1);
    // console.log('comm2', commonCharacterInGroup2);
    // console.log('comm3', commonCharacterInGroup3);
    const total = commonCharacterInGroup1+ commonCharacterInGroup2+commonCharacterInGroup3
    
    totalAll.push(...total)
    console.log('total all', totalAll);
    commonCharacter.push(...commonCharacterInGroup1, ...commonCharacterInGroup2, ...commonCharacterInGroup3);


    const numericValues = commonCharacter.map(char => getNumericValue(char));
    const numericValues1 = totalAll.map(char=> getNumericValue(char))
    const sum = numericValues.reduce((acc, value) => acc + value, 0);
    const sum1 = numericValues1.reduce((acc,value)=> acc + value,0)
    
    console.log('common character', commonCharacter);
    // console.log('Numeric values:', numericValues);
    console.log('Sum:', sum);
    console.log('sum1', sum1);
});
