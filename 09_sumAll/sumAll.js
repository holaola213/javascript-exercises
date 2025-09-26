const sumAll = function(first, second) {
    if (Number.isInteger(first) && Number.isInteger(second) && first >= 0 && second >= 0){
        const array = [first, second]; 
        array.sort((a,b) => a - b);
        let total = 0;
        for(let i = array[0]; i < array[1]; i++){
            total += i;
        }
        return total + array[1];
    }
    else{
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
