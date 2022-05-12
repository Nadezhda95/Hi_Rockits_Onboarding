function searchMessage(text, messagesArr) {
  messagesArr = (typeof messagesArr !== 'undefined') ? messagesArr : messagesSheet.getRange(1,1,messagesSheet.getLastRow(),messagesSheet.getLastColumn()).getValues();

  const finalArr = messagesArr.map((el) => {
    if (el[1] === text) {
      if (el[2]) {
        return `${el[2]}\n${el[3]}`
      } else {
        return `${el[3]}`
      }
    }
  })
  .filter(Boolean)

  return finalArr
}


function userAuth(msgData) {
  const dictSheet_arr = dictSheet.getRange(1,numColLoginDict,dictSheet.getLastRow(),1).getValues().flat();
  const userName = `@${msgData.user_name}`;
  const ind = dictSheet_arr.indexOf(userName);
  if (ind > -1 && dictSheet_arr[ind][numColChatIDSideDict-1] === ``) dictSheet.getRange(ind+1,numColChatIDSideDict).setValue(msgData.chatId);
  
  return ind 
}

function sendReminder() {
  const reminderList = dictSheet.getRange(2,numColMonthsDict,dictSheet.getLastRow()-1,3).getValues();
  reminderList.map((el) => {
    //счетчик отправок < 3 && количество месяцев в компании от 1 до 3 && заполнен чат ид
    if (el[1] <= 3 && el[0] >=1 && el[0] <= 3 && el[2] !== '') {
      el[1] += 1;
      send(`Проверь свои задачи на каждый месяц работы:\nМоя адаптация -> Задачи на каждый месяц работы`, el[2], API);
    }
    
    el.shift();
  })
  return setReminderValues(reminderList)
}

function setReminderValues(arr) {
  sideDictSheet.getRange(2,numColReminderDict,dictSheet.getLastRow()-1,2).setValues(arr);
}

function setCheck(msgData) {
  edit_msg(`✅ Выполнено\n${msgData.text}`, msgData.chatId, msgData.id, API);
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

function getContacts(msgData) {
  const arr = dictSheet.getRange(1,1,dictSheet.getLastRow(),dictSheet.getLastColumn()).getValues();
  const userName = `@${msgData.user_name}`;

  const finalArr = arr.map((el) => {
    if (el[5] === userName) {
      return `${el[0]}\n${el[4]}\n${el[5]}\n${el[6]}`
    }
  })
  .filter(Boolean)

  return finalArr
}

function createInlineKeyboard(text) {
  let msgArr = messagesSheet.getRange(1,1,messagesSheet.getLastRow(),messagesSheet.getLastColumn()).getValues();

  let buttonsArr = msgArr.map((el) => {
    if (el[0] === text) {
      return el[1]
    }
  })
  .filter((value, index, self) => self.indexOf(value) === index) //только уникальные значения
  .filter(Boolean); //исключение underfined

  let cur_keyboard_arr = new Array();
  let KEYBOARD = new Object();

  for (i=0; i<buttonsArr.length; i++) {
    cur_keyboard_arr.push( [{"text":buttonsArr[i], "callback_data":buttonsArr[i]}]);
  }
  if (cur_keyboard_arr != "") {
    KEYBOARD = 
      {
        "inline_keyboard": cur_keyboard_arr,
        "resize_keyboard": true
      }
  }

  //Logger.log(KEYBOARD)

  return KEYBOARD
  
}


function updateSideDictionary() {
  const originalList = dictSheet.getRange(1,1,dictSheet.getLastRow(),1).getValues().flat();
  const dictList = sideDictSheet.getRange(1,1,sideDictSheet.getLastRow(),sideDictSheet.getLastColumn()).getValues();
  const tempDictList = sideDictSheet.getRange(1,1,sideDictSheet.getLastRow(),1).getValues().flat();

  if (originalList.length != tempDictList.length) {
    originalList.forEach((el,index) => {if (tempDictList.includes(el) == false) dictList.splice(index,0,[el,1,'']) })
  }

  sideDictSheet.getRange(1,1,dictList.length,dictList[0].length).setValues(dictList);
}



