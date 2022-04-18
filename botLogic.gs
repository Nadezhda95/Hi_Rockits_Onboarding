function botLogic(msgData) {
  Telegram.send_action(msgData.chatId,API);

  if (userAuth(msgData) == true) {

    if (msgData.is_msg == true) {
      if (msgData.text.indexOf('/') === 0) {
        if (msgData.command == `/start`) {
          const msg = `Рад знакомству!\nНиже вся необходимая информация, которая поможет тебе максимально быстро и легко влится в работу`;
          initialHandler(msgData,msg);
          sendReminder(1,msgData);
        }
      } else {
        replyKeyboardHandler(msgData);
        }
      }

    if (msgData.is_button == true) {
      if (msgData.vote == `check`) {
        setCheck(msgData);
      }
    } 
    
  } else {
    Telegram.send_removeKeyboard(`Авторизация не прошла... Свяжись со своим куратором`, msgData.chatId, API);
    Telegram.forward(root_chatId,msgData.chatId,msgData.id+1,API);
  }
}