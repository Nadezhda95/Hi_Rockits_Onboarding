function botLogic(msgData) {
  send_action(msgData.chatId,API);
  updateSideDictionary();

  const ind = userAuth(msgData);

  if (ind > -1) {
    sideDictSheet.getRange(ind+1,numColChatIDSideDict).setValue(msgData.chatId);
    addUserToAutoDaFe(msgData);

    if (msgData.is_msg == true) {
      if (msgData.text.indexOf('/') === 0) {
        if (msgData.command == `/start`) startButtonHandler(msgData);
      } else {
        replyKeyboardHandler(msgData);
        }
      }

    if (msgData.is_button == true) {
      switch (msgData.vote) {
        case `check`: setCheck(msgData,ind); break;
        case `firstDayTasks`: firstDayHandler(msgData); break;
        default: callbackHandler(msgData).forEach((el) => send(el,msgData.chatId,API));
      }
    }  
  } else {
    send_removeKeyboard(`Авторизация не прошла... Свяжись с поддержкой`, msgData.chatId, API);
  }
}
