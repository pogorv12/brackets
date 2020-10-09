module.exports = function check(str, bracketsConfig) {
  const isOpenBracket = (openBracket) => bracketsConfig.some(((pattern) => pattern[0] === openBracket));
  const isCloseBracket = (closeBracket) => bracketsConfig.some(((pattern) => pattern[1] === closeBracket));
  const isPairBracket = (openBracket, closeBracket) => bracketsConfig.some(((pattern) => pattern[0] === openBracket && pattern[1] === closeBracket));
  
  const aBracketsSeq = str.split('');
  let currentBracket = '';
  let aBracketsLog = Array();
  
  while (currentBracket = aBracketsSeq.pop()) {
    if (isPairBracket(currentBracket, currentBracket) && aBracketsLog.length > 0) {
      if(currentBracket === aBracketsLog[aBracketsLog.length - 1]){
        aBracketsLog.pop(); 
      } else {
        aBracketsLog.push(currentBracket);
      }
      continue;
    }
    if (isCloseBracket(currentBracket)) {
      aBracketsLog.push(currentBracket);
      continue;
    }
    if (isOpenBracket(currentBracket)) {
      if(!isPairBracket(currentBracket,aBracketsLog.pop())) {
          return false;
      };
    }  
  }
  return aBracketsLog.length > 0 ? false : true;
}
