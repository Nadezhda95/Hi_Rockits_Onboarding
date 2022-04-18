function doPost(e) {
  const update = JSON.parse(e.postData.contents);
  Telegram.send(update,update.message.chat.id,API)
  let msgData = {}
  if (update.hasOwnProperty('message')) {
    msgData = {
      id         : update.message.message_id,
      chatId    : update.message.chat.id,
      userName  : update.message.from.username,
      first_name : update.message.from.first_name,
      text       : update.message.text,
      command    : update.message.text.split(" ")[0],
      date       : update.message.date/86400+25569.125,
      is_msg     : true
    } 
    if (update.message.hasOwnProperty('forward_from')) {
      msgData.forward_userName  = update.message.forward_from.username;
      msgData.forward_first_name = update.message.forward_from.first_name;
      msgData.is_forward         = true
 
    }
    if (update.message.hasOwnProperty('reply_to_message')) {
      msgData.reply_id          = update.message.reply_to_message.message_id;
      msgData.reply_text        = update.message.reply_to_message.text;
      msgData.reply_date        = update.message.reply_to_message.date;
      msgData.reply_userName   = update.message.reply_to_message.from.username;
      msgData.reply_first_name  = update.message.reply_to_message.from.first_name;
      msgData.is_reply          =  true
    }
  }

  if (update.hasOwnProperty('edited_message')) {
    msgData = {
      id         : update.edited_message.message_id,
      chatId    : update.edited_message.chat.id,
      userName  : update.edited_message.from.username,
      first_name : update.edited_message.from.first_name,
      text       : update.edited_message.text,
      command    : update.edited_message.text.split(" ")[0],
      date       : update.edited_message.date/86400+25569.125,
      is_edited  : true
    } 
  }

  if (update.hasOwnProperty('callback_query')) {
    msgData = {
      id        : update.callback_query.message.message_id,
      chatId   : update.callback_query.message.chat.id,
      userName : update.callback_query.from.username,
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
