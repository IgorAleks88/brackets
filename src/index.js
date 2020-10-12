module.exports = function check(str, bracketsConfig) {
  let bracketsCount=0;
  for (let i=0; i<bracketsConfig.length; i++){
    let openBrackets=0;
    let closeBrackets=0;
    for (let j=0; j<str.length; j++) {
      if (str[j]==bracketsConfig[i][0]) {openBrackets++;}
      if (str[j]==bracketsConfig[i][1]&&closeBrackets<openBrackets) {closeBrackets++;}
    }
if (closeBrackets==openBrackets) {bracketsCount++}
  }
  if (bracketsCount==bracketsConfig.length) {return true} else {return false}
}
