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
  const dictSheetArr = dictSheet.getRange(1,numColLoginDict,dictSheet.getLastRow(),1).getValues().flat();
  const userName = `@${msgData.user_name}`;
  const ind = dictSheetArr.indexOf(userName);
  
  return ind 
}


function sendMonthlyReminder_() {
  const reminderList = sideDictSheet.getRange(1,1,sideDictSheet.getLastRow(),sideDictSheet.getLastColumn()).getValues();
  
  //[Шевчук Анастасия, 1.0, 1.0, 3.11157431E8, 6.0]

  reminderList.map((el) => {
    //счетчик отправок < 3 && кол-во месяцев не равно кол-ву отправок && (кол-во месяцев от 1 до 3) && заполнен чат ид
    if (el[2] <= 3 && el[1] === el[2] && (el[1] >=1 && el[1] <= 3) && el[3] !== '') {
      searchMessage(`${el[1]} месяц`,messagesArr = undefined)
        .forEach((element) => send_key(element, el[3], API, Keyboard_check));
      el[2] += 1; //счетчик отправок
    } 
  })
  return setSideDictValues(reminderList, monthsColumn = `undefined`)
}

function sendMonthlyReminder() {
  const reminderList = sideDictSheet.getRange(1,1,sideDictSheet.getLastRow(),sideDictSheet.getLastColumn()).getValues();
  const list = dictSheet.getRange(1,1,dictSheet.getLastRow(),dictSheet.getLastColumn()).getValues();

  reminderList.map((el) => {
    //счетчик отправок < 3 && кол-во месяцев не равно кол-ву отправок && (кол-во месяцев от 1 до 3) && заполнен чат ид
    if (el[2] <= 3 && el[1] === el[2] && (el[1] >=1 && el[1] <= 3) && el[3] !== '') {
      searchMessage(`${el[1]} месяц`,messagesArr = undefined)
        .forEach((element) => send_key(element, el[3], API, Keyboard_check));
      el[2] += 1; //счетчик отправок
    }
  })

  const curDate = new Date();
  reminderList.filter((el,ind) => {
    if (el[numColReminderSideDict-1] == `3`) {
      //Logger.log(weeksBetween(list[ind][numColEmploymentDateDict-1], curDate))
      const curWeeksAmount = weeksBetween(list[ind][numColEmploymentDateDict-1], curDate);
      if (curWeeksAmount == weeksInTemp-2) {
        searchMessage(`11 недель`,messagesArr = undefined)
          .forEach((element) => send_key(element, el[3], API, Keyboard_check));
      } else if (curWeeksAmount == weeksInTemp-1) {
        searchMessage(`12 недель`,messagesArr = undefined)
          .forEach((element) => send_key(element, el[3], API, Keyboard_check));
      } else if (curWeeksAmount == weeksInTemp) {
        searchMessage(`Финал`,messagesArr = undefined)
          .forEach((element) => send(element, el[3], API));
      }
    }
  })

  return setSideDictValues(reminderList, monthsColumn = `undefined`)

}

function weeksBetween(beginDate, endDate) {
  return Math.round((endDate - beginDate) / (7 * 24 * 60 * 60 * 1000))+1;
}

function isLastCheck(msgData,userIndex,dictList) {
  const msg = searchMessage('Финал', undefined);

  if (dictList[userIndex][numColChecksSideDict-1] == checksAmount) {
    send(msg,msgData.chatId,API)
    dictList[userIndex][numColChecksSideDict-1] += 1;
  }

  return setSideDictValues(dictList,monthsColumn = `undefined`)
}


function setSideDictValues(arr,monthsColumn) {
  sideDictSheet.clear({ formatOnly: false, contentsOnly: true });
  sideDictSheet.getRange(1,1,arr.length,arr[0].length).setValues(arr);

  if (monthsColumn !==`undefined`) {
    newArray = Array.from(monthsColumn, x => [x])
    sideDictSheet.getRange(1,numColMonthsSideDict,newArray.length,newArray[0].length).setValues(newArray);
  }
}

function setCheck(msgData,userIndex) {
  edit_msg(`✅ Выполнено\n\n${msgData.text}`, msgData.chatId, msgData.id, API);
  const dictList = sideDictSheet.getRange(1,1,sideDictSheet.getLastRow(),sideDictSheet.getLastColumn()).getValues();

  dictList[userIndex][numColChecksSideDict-1] += 1;

  //Logger.log(dictList)
  //return isLastCheck(msgData,userIndex,dictList)
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
  const originalNamesList = dictSheet.getRange(1,1,dictSheet.getLastRow(),1).getValues().flat();
  const dictList = sideDictSheet.getRange(1,1,sideDictSheet.getLastRow(),sideDictSheet.getLastColumn()).getValues();
  const dictNamesList = sideDictSheet.getRange(1,1,sideDictSheet.getLastRow(),1).getValues().flat();
  const originalMonthsList = dictSheet.getRange(1,numColMonthsDict,dictSheet.getLastRow(),1).getValues().flat();

  originalNamesList.forEach((el,index) => {
    if (dictNamesList.includes(el) == false) {
      dictList.splice(index,0,[el,originalMonthsList[index],1,'','']) 
    }
  })

  dictNamesList.forEach((el,index) => {
    if (originalNamesList.includes(el) == false) {
      dictList.splice(index,1)
    }
  })

  return setSideDictValues(dictList,originalMonthsList)

}

