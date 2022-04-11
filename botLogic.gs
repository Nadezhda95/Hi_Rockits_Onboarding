function bot_logic(msg_data) {
  Telegram.send_action(msg_data.chat_id,API);

  if (msg_data.is_msg == true) {
    if (msg_data.command == '/start') {
      Telegram.send_key('Привет! Добро пожаловать в команду Hi, Rockits!\nМеня зовут ... , я  буду помогать тебе адаптироваться у нас\nНо сперва давай познакомимся)\nОтправь свой корпоративный номер или email для авторизации', msg_data.chat_id, API, Menu_keyboard);
  }
    if (user_auth(msg_data) > -1) {
      Telegram.send('ИМЯ, рад знакомствую!\nНиже вся необходимая информация, которая поможет тебе максимально быстро и легко влится в работу',msg_data.chat_id, API)
    } else {
      Telegram.send('Проверь правильность отправленных данных',msg_data.chat_id, API)
    }
  }
  /*
  const users_arr = Users.getRange(2,1,get_last_row(Users,"A2:A"),1).getValues().flat();


  if (users_arr.indexOf(msg_data.user_name) >= 0) {
    if (msg_data.is_msg) {
      save_msg_data_handler(msg_data);
      send_keyboard_select_cahnnel_handler(msg_data);
    } 
    
    if (msg_data.is_button) {
      if (msg_data.vote == 'approve' || msg_data.vote =='reject') {

      } else if (msg_data.vote == 'select') {
        send_keyboard_addresses_hadler(msg_data);
      } else {
        resend_to_channel_handler(msg_data);
        clean_data_handler();
      }
      Telegram.delete_inline(msg_data.chat_id,msg_data.id,API)
    }
  }
  */
}