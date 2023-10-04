const fs = require('fs');
const filePath = 'input.day4.txt';

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.log('There is an error', err);
        return;
    }

    const lines = data.split('\n');
    let count = 0;

    for (let line of lines) {
        const pairs = line.trim().split(',').map(pair => pair.split('-'));

        for (let i = 0; i < pairs.length; i++) {
            const [a, b] = pairs[i].map(Number);

            for (let j = i + 1; j < pairs.length; j++) { 
                const [x, y] = pairs[j].map(Number);

                if ((a <= x && b >= y) || (x <= a && y >= b) ) 
                {
                    count++;
                }
            }
        }
    }

    console.log('Count:', count);
});
