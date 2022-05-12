function botLogic(msgData) {
  send_action(msgData.chatId,API);
  
  const ind = userAuth(msgData);

  if (ind > -1) {
    if (msgData.is_msg == true) {
      if (msgData.text.indexOf('/') === 0) { //if (msgData.text[0] === '/') {
        if (msgData.command == `/start`) {
          const msg = `Привет, друг! Добро пожаловать в команду Hi, Rockits!, мы так рады, что ты с нами)\nНам предстоит увлекательный, сложный и безумно интересный совместный путь. Погнали?!\n\nМеня зовут ... , я  буду помогать тебе освоиться у нас.\n\nНиже представлена вся необходимая информация, которая поможет тебе максимально быстро и легко влится в работу, а так же узнать о нас чуть больше)`;
          send_key(msg,msgData.chatId,API,Keyboard_menu);
          //sendReminder(1,msgData);
        }
      } else {
        send('test',msgData.chatId,API)
        replyKeyboardHandler(msgData);
        }
      }

    if (msgData.is_button == true) {
      if (msgData.vote == `check`) {
        setCheck(msgData);
      } else {
        callbackHandler(msgData).forEach((el) => send(el,msgData.chatId,API));
      }
    } 
    
  } else {
    send_removeKeyboard(`Авторизация не прошла... Свяжись с поддержкой`, msgData.chatId, API);
    //forward(root_chatId,msgData.chatId,msgData.id+1,API);
  }
}