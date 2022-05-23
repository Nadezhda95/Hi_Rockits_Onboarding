function userAuthTest() {
  const dictSheetArr = dictSheet.getRange(1,numColLoginDict,dictSheet.getLastRow(),1).getValues().flat();
  const userName = `@MariDoz`//`@${msgData.user_name}`;
  const ind = dictSheetArr.indexOf(userName);
  
  return ind 
  //Logger.log(ind)
}

function botLogicTest() {
  const msg = searchMessage('Финал', undefined);
  Logger.log(msg)
}