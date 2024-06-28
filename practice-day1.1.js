const fs = require('fs');

const filePath = 'input.day1.txt'

fs.readFile(filePath, 'utf-8', (err,data)=>{
  if (err) {
        console.log('There is an error', err);
    } else {
      const lines = data.split('\n');
      const allValues = [];
       lines.forEach(line => {
        let matches = line.replace(/[^0-9]/g, "");
        allValues.push(matches);          
        });
     
        const digits = [];
        for (let i =0; i< allValues.length; i++){
          const currentValue = allValues[i];
          if (currentValue.length===1){
            digits.push(currentValue+currentValue)
          } else if (currentValue.length===2){
            digits.push(currentValue)
          }else{
            const firstDigit = currentValue[0];
            const lastDigit = currentValue[currentValue.length -1];
            digits.push(firstDigit+lastDigit)
          }
        }
               let intArray = [];
        for (i = 0; i < digits.length; i++){
          intArray.push(parseInt(digits[i]))
        }
    
        function sumArray(intArray){
        sumArray = 0

        for (i = 0; i < intArray.length; i++){
          sumArray += intArray[i];
        }
          return sumArray
         
        }
        console.log(sumArray(intArray))

       }

})

