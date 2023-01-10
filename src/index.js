module.exports = function toReadable (number) {
    let strNumber = String(number);
    let mas19 = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let masX = ["","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    return number <= 19 ? mas19[number] : 
      strNumber.length === 2 && strNumber[1] === '0' ? masX[Number(strNumber[0])] : 
        strNumber.length === 2 && strNumber[1] != '0' ? masX[Number(strNumber[0])] + " "+mas19[strNumber[1]]:
          strNumber.length === 3 && strNumber[1] === '0' && strNumber[2] === '0' ? mas19[strNumber[0]] + " hundred" : 
            strNumber.length === 3 && number%100 <= 19 ? mas19[strNumber[0]]+" hundred " + mas19[number%100]:
              strNumber.length === 3 && strNumber[2] === '0' ? mas19[strNumber[0]]+" hundred " + masX[Number(strNumber[1])] :
              mas19[strNumber[0]]+" hundred " + masX[Number(strNumber[1])] + " " + mas19[Number(strNumber[2])];
}
