/**
 * Returns an object indicating success if the argument it receives means true.
 * @param {*} success 
 * @returns 
 */
function getPaymentTokenFromAPI(success) {
  if (success) {
    return new Promise((resolve, reject) => {
      resolve({data: 'Successful response from the API'});
    });
  }
}
  
module.exports = getPaymentTokenFromAPI;
