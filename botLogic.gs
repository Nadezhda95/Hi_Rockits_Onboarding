function botLogic(msgData) {
  send_action(msgData.chatId,API);

  const ind = userAuth(msgData);
  let text = new String();

  if (ind > -1) {
    saveChatId(msgData);
    addUserToAutoDaFe(msgData);

    if (msgData.is_msg == true) {
      if (msgData.text.indexOf('/') === 0) {
        if (msgData.command == `/start`) startButtonHandler(msgData);
      } else {
        replyKeyboardHandler(msgData);
      }
      text = msgData.text;
    }

    if (msgData.is_button == true) {
      switch (msgData.vote) {
        case `check`: setCheck(msgData); break;
        case `firstDayTasks`: firstDayHandler(msgData); break;
        default: callbackHandler(msgData).forEach((el) => send(el,msgData.chatId,API));
      }
      text = msgData.vote;
    }  
    breakpoint(journalSheet, msgData.user_name, msgData.date, text);
  } else {
    send_removeKeyboard(`Авторизация не прошла... Свяжись с поддержкой`, msgData.chatId, API);
  }
}
