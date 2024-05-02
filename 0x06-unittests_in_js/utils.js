
const Utils = {
    /**
    * Calculates a simple operation on two provided numbers.
    * 
    * a and b are assumed to always be numbers, without validating it.
    * @param {string} type 
    * @param {number} a 
    * @param {number} b 
    * @returns 
    */
    calculateNumber: (type, a, b) => {
       // try/catch can be used
       a = Math.round(a);
       b = Math.round(b);
   
       // ADDITION of a and b
       if (type === 'SUM') {
           return a + b;
       }
   
       // SUBTRACTION of a and b
       if (type === 'SUBTRACT') {
           return a - b;
       }
   
       // DIVISION of a and b
       if (type === 'DIVIDE') {
           if (b === 0) return 'Error'; //
   
           return a / b;
       }

       return;
   }  
}

module.exports = Utils;