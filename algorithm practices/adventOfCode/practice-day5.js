const fs = require('fs');

const filePath = 'input.day5.txt';

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.log('There is an error', err);
    } else {
       
        const lines = data.trim().split('\n');
        console.log(lines);
        
        const grid = [];

        // Iterate over each line and split it into characters
        for (const line of lines) {
            const characters = line.split(' ');
            grid.push(characters);
        }

        // Display the created grid
        for (const row of grid) {
            console.log(row.join(' '));
        }
    }
});
