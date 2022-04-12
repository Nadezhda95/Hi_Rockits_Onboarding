function bot_logic(msg_data) {
  Telegram.send_action(msg_data.chat_id,API);
  Telegram.send_removeKeyboard('Авторизация по корпоративному номеру или корпоративной почте',msg_data.chat_id,API)

  if (msg_data.is_msg == true) {
    if (msg_data.text.indexOf('/') == 0) {
      if (msg_data.command == '/start') {
        const msg = Messages.getRange(2,2).getValue();
        Telegram.send(msg, msg_data.chat_id, API);
      } 
    }

    if (msg_data.text == 'Моя адаптация') {
      my_adaptation_handler(msg_data);
    }
    
    else if (user_auth(msg_data) > -1) {
      const name = get_name(user_auth(msg_data));
      Telegram.send_key(`${name} рад знакомству!\nНиже вся необходимая информация, которая поможет тебе максимально быстро и легко влится в работу`, msg_data.chat_id, API, Menu_keyboard);
    } else {
      Telegram.send('Проверь правильность отправленных данных',msg_data.chat_id, API);
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