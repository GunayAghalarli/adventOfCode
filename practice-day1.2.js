const fs = require('fs');

const filePath = 'input.day1.txt'

fs.readFile(filePath, 'utf-8', (err,data)=>{
  if (err) {
        console.log('There is an error', err);
    } else {
      const lines = data.split('\n');
      const allValues = []
      lines.map(line =>{
        const rep = line.replace(/oneight/g, '18').replace(/threeight/g, '38').replace(/fiveight/g, '58').replace(/twone/g, '21').replace(/eightwo/g, '82').replace(/eighthree/g, '83')
        .replace(/nineight/g, '98').replace(/sevenine/g,'79').replace(/one/g,'1').replace(/two/g,'2').replace(/three/g,'3').replace(/four/g,'4')
    .replace(/five/g,'5').replace(/six/g,'6').replace(/seven/g,'7').replace(/eight/g,'8').replace(/nine/g,'9').replace(/zero/g,'0');
       allValues.push(rep)
      }
    )

    console.log(allValues);
    const replacedDigits = []
    
    allValues.forEach(line => {
        let matches = line.replace(/[^0-9]/g, "");
        replacedDigits.push(matches);          
        });
        console.log(replacedDigits);
     
        const digits = [];
        for (let i =0; i< replacedDigits.length; i++){
          const currentValue = replacedDigits[i];
          if (currentValue.length===1 || currentValue.length[0]===0){
            digits.push(currentValue+currentValue)
          }else{
            const firstDigit = currentValue[0];
            const lastDigit = currentValue[currentValue.length - 1];
            digits.push(firstDigit + lastDigit);
          }
        }
        console.log(digits);
               let intArray = [];
        for (let i = 0; i < digits.length; i++){
          intArray.push(parseInt(digits[i]))
        }
    
        function sumArray(intArray){
        let sum = 0

        for (let i = 0; i < intArray.length; i++){
          sum += intArray[i];
        }
          return sum
         
        }
        console.log(sumArray(intArray))

       }

})

