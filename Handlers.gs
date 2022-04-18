function infoButtonHandler(msgData) {
  Telegram.send_key('Выбери тему запроса',msgData.chatId,API,Keyboard_info);
}

function simpleButtonHandler(msgData) {
  const keyboard = createKeyboard(msgData);
  Telegram.send_key('Выбери тему запроса',msgData.chatId,API,keyboard);
}

function initialHandler(msgData,msg) {
  Telegram.send_key(msg, msgData.chatId, API, Menu_keyboard);
}

function headButtonHandler(msgData) {
  //нужен справочник; отправить фио и контакты
}

function replyKeyboardHandler(msgData) {
  switch (msgData.text) {
    case `Моя адаптация`:
      simpleButtonHandler(msgData);
      break;
    case `Инфо`:
      infoButtonHandler(msgData);
      break;
    case `Развитие`:
      simpleButtonHandler(msgData);
      break;
    case `О компании`:
      simpleButtonHandler(msgData);
      break;
    case `Обратная связь`:
      simpleButtonHandler(msgData);
      break;
    case `Полезные контакты`:
      simpleButtonHandler(msgData);
      break;
    case `Мои контакты`:
      //infoButtonHandler(msgData);
      break;
    case `Контакты руководителя`:
      headButtonHandler(msgData);
      break;
    case `Назад`:
      const msg = `Выбери тему запроса`
      initialHandler(msgData,msg);
      break;
    default: searchMessage(msgData);
  }
}
