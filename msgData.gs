function doPost(e) {
  const update = JSON.parse(e.postData.contents);
  let msgData = {}
  if (update.hasOwnProperty('message')) {
    msgData = {
      id         : update.message.message_id,
      chatId     : update.message.chat.id,
      user_name  : update.message.from.username,
      first_name : update.message.from.first_name,
      text       : update.message.text,
      command    : update.message.text.split(" ")[0],
      date       : update.message.date/86400+25569.125,
      is_msg     : true
    }
  }

  if (update.hasOwnProperty('callback_query')) {
    msgData = {
      id        : update.callback_query.message.message_id,
      chatId    : update.callback_query.message.chat.id,
      user_name : update.callback_query.from.username,
      firstName : update.callback_query.from.first_name,
      text      : update.callback_query.message.text,
      command   : update.callback_query.message.text.split('\n')[0],
      date      : update.callback_query.message.date/86400+25569.125,
      vote      : update.callback_query.data,
      is_button : true
    }

  }

  botLogic(msgData);
}
