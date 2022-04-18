function searchMessage(msgData) {
  const messagesArr = messagesSheet.getRange(1,1,messagesSheet.getLastRow(),messagesSheet.getLastColumn()).getValues();

  messagesArr.map((el) => {
    if (el[1] === msgData.text) {
      if (el[2]) {
        return `${el[2]}\n${el[3]}`
      } else {
        return `${el[3]}`
      }
    }
  })
  .filter(Boolean)
  .forEach((el) => Telegram.send(el,msgData.chatId,API));
}


/*function sendMessages(msgArr,flag) {
  if (flag === 'key') {
    Telegram.send_key(msg,msgData.chatId,API,Keyboard_check);
  } else {
    Telegram.send(msg,msgData.chatId,API);
  }
}*/


function userAuth(msgData) {
  const authDataSheet_arr = authDataSheet.getRange(2,1,authDataSheet.getLastRow(),authDataSheet.getLastColumn()).getValues().flat();

  return authDataSheet_arr.includes(msgData.userName)
}

/**
 * The function returns an index of the key in the sheet's column
 * 
 * @param  {number} key The key for searching
 * @param  {SpreadsheetApp.Sheet} sheet The variable containing link to the sheet
 * @param  {number} col The number of the column for searching
 * @return {number} ind of the key in the table if table includes a header or index of position in the array
 */
function getIndex(key,sheet,col) {

  let lr = sheet.getLastRow();
  let chatId_arr = sheet.getRange(1,col,lr).getValues();
  chatId_arr = chatId_arr.flat();
  let ind = chatId_arr.indexOf(key);
  
  return ind;
}

function sendReminder(reminderCol,msgData) {
  const actionList = adaptationSheet.getRange(2,reminderCol,adaptationSheet.getLastRow()-1,1).getValues().flat();
  actionList.forEach((el) => Telegram.send_key(el,msgData.chatId,API,Keyboard_check))
}

function setCheck(msgData) {
  Telegram.edit_msg(`${msgData.text}\n✅ Выполнено`, msgData.chatId, msgData.id, API);
}


function createKeyboard(msgData) {
  let msgArr = messagesSheet.getRange(1,1,messagesSheet.getLastRow(),messagesSheet.getLastColumn()).getValues();

  let buttonsArr = msgArr.map((el) => {
    if (el[0] === msgData.text) {
      return el[1]
    }
  })
  .filter((value, index, self) => self.indexOf(value) === index) //только уникальные значения
  .filter(Boolean); //исключение underfined

  buttonsArr = chunkify(buttonsArr, length = 3)
  buttonsArr.push(['Назад'])

  const keyboard = {
    'keyboard' : buttonsArr,
    'resize_keyboard': true
  };

  return keyboard
}


function chunkify(array, length) {
  const result = new Array(Math.ceil(array.length / length))
    .fill()
    .map(_ => array.splice(0, length))

  return result
}




