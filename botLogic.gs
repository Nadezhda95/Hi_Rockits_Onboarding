function botLogic(msgData) {
  Telegram.send_action(msgData.chatId,API);
  
  const ind = userAuth(msgData);

  if (ind > -1) {
    if (msgData.is_msg == true) {
      if (msgData.text.indexOf('/') === 0) { //if (msgData.text[0] === '/') {
        if (msgData.command == `/start`) {
          const msg = `Рад знакомству!\nНиже вся необходимая информация, которая поможет тебе максимально быстро и легко влится в работу`;
          Telegram.send_key(msg,msgData.chatId,API,Keyboard_menu);
          sendReminder(1,msgData);
        }
      } else {
        replyKeyboardHandler(msgData);
        }
      }

    if (msgData.is_button == true) {
      if (msgData.vote == `check`) {
        setCheck(msgData);
      } else {
        callbackHandler(msgData).forEach((el) => Telegram.send(el,msgData.chatId,API));
      }
    } 
    
  } else {
    Telegram.send_removeKeyboard(`Авторизация не прошла... Свяжись с поддержкой`, msgData.chatId, API);
    //Telegram.forward(root_chatId,msgData.chatId,msgData.id+1,API);
  }
}