function rampNumbers(num){
  if(!Number.isInteger(num) || (!num > 0)){
    return false;
  } else {
    var newNum = num.toString()
    for(var i = 1; i < newNum.length; i++){
      if(newNum[i] < newNum[i-1]){
        return false
      }
    }
  }
  return true;
}
console.log(rampNumbers(1233334));
console.log(rampNumbers(1234567));
console.log(rampNumbers(1234321));
