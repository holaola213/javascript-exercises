// const removeFromArray = function() {
//     const array = arguments[0];
//     const filteredArray = array.filter(item => {
//         let i = 1;
//         while (i < arguments.length){
//             if (item === arguments[i]){
//                  return false;   
//             }
//             i++;
//         }
//         return true;
//     });
//     return filteredArray;
// };

const removeFromArray = (array, ...values) =>
  array.filter(item => !values.includes(item));


// Do not edit below this line
module.exports = removeFromArray;
