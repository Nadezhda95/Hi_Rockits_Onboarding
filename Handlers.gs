function defaultHandler(msgData,keyboard) {
  keyboard = (typeof keyboard !== 'undefined') ? keyboard : createKeyboard(msgData); 
  const msg = `Выбери тему запроса`
  Telegram.send_key(msg, msgData.chatId, API, keyboard);
}

function headButtonHandler(msgData) {
  const userName = `@${msgData.user_name}`;
  const peopleArr = dictSheet.getRange(1,1, dictSheet.getLastRow(), numColLoginDict).getValues();
  const teamLead = peopleArr.find((el) => el.includes(userName))[numColTeamDict-1];

  const teamLeadInfo = peopleArr.find((el) => el[0] === teamLead);

  if (teamLeadInfo == null) {
    Telegram.send(`Контакты не найдены...\nСвяжись с поддержкой`,msgData.chatId,API);
  } else {
    Telegram.send(`${teamLeadInfo[numColNameDict-1]}\n${teamLeadInfo[numColDepartmentDict-1]}\n${teamLeadInfo[numColMailDict-1]}\n${teamLeadInfo[numColLoginDict-1]}`,msgData.chatId,API);
  }
}

function callbackHandler(msgData) {
  const messagesArr = messagesSheet.getRange(1,1,messagesSheet.getLastRow(),messagesSheet.getLastColumn()).getValues();
  const userName = `@${msgData.user_name}`;
  const peopleArr = dictSheet.getRange(1,numColLoginDict, dictSheet.getLastRow(), Math.max(numColRegisterTypeDict,numColLoginDict) - Math.min(numColRegisterTypeDict, numColLoginDict)+1).getValues();
  const registerType = peopleArr.find((el) => el.includes(userName));

  let finalArr = messagesArr.filter((el) => el[0] === registerType)

  if (finalArr.length === 0) {
    finalArr = messagesArr.filter((el) => el[0] === `Штат`);
  }

  return searchMessage(msgData.vote, finalArr)
}

function replyKeyboardHandler(msgData) {
  switch (msgData.text) {
    case `Моя адаптация`:
    case `Развитие`:
    case `О компании`:
    case `Обратная связь`:
    case `Полезные контакты`:
      defaultHandler(msgData, keyboard = undefined);
      break;
    case `Инфо`:
      defaultHandler(msgData,Keyboard_info);
      break;
    case `Назад`:
      defaultHandler(msgData,Keyboard_menu);
      break;
    case `Мои контакты`:
      getContacts(msgData).forEach((el) => Telegram.send(el,msgData.chatId,API));
      break;
    case `Контакты руководителя`:
      headButtonHandler(msgData);
      break;
    default: searchMessage(msgData.text, messagesArr = undefined).forEach(el => Telegram.send(el,msgData.chatId,API));
           /* .forEach((el) => {
              if (msgData.text !== `Задачи в 1 рабочий день`) {
                Telegram.send(el,msgData.chatId,API);
              } else {
                Telegram.send_key(el,msgData.chatId,API,Keyboard_check);
              }
            });*/
  }
}
