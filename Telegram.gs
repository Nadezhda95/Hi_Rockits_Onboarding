/**
 * The function sends a message to the chat by bot
 * 
 * @param  {string} msg Text to be sent
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 */
function forward(chat_id, from_chat_id, message_id, api) {
  const request = `https://api.telegram.org/bot${api}/`;
  const payload = {
    method      :`forwardMessage`,
    chat_id     : String(chat_id),
    from_chat_id: String(from_chat_id),
    message_id  : String(message_id)
  };

  const data = {
    method : 'post',
    payload: payload
  }

  UrlFetchApp.fetch(request, data);
}

/**
 * The function sends a message to the chat by bot
 * 
 * @param  {string} msg Text to be sent
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 */
function send(msg, chat_id, api) {
  const request = `https://api.telegram.org/bot${api}/`;
  const payload = {
    method : 'sendMessage',
    chat_id: String(chat_id),
    text   : msg,
  };

  const data = {
    method : 'post',
    payload: payload
  }
  
  UrlFetchApp.fetch(request, data);
}


/**
 * The function edits a message text
 * 
 * @param  {string} msg Text to be sent
 * @param  {number} msg_id
 * @param  {string} api Bot's API
 */
function edit_msg(msg, chat_id, msg_id, api) {
  var payload = {
  'method': 'editMessageText',
  'chat_id': String(chat_id),
  'message_id': String(msg_id),
  'text': msg,
  'parse_mode': 'HTML'
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}

/**
 * The function sends doc to the chat by bot
 * 
 * @param  {string} doc blob format
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 * 
 */
function send_doc(doc, chat_id, api) {
  var payload = {
  'method': 'sendDocument',
  'chat_id': String(chat_id),
  'document': doc
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}

/**
 * The function sends group of media to the chat by bot
 * 
 * @param  {string} media A JSON-serialized array, must include 2-10 items
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 * 
 */
function send_media_group(media, chat_id, api) {
  const payload = {
    'method': 'sendMediaGroup',
    'chat_id': String(chat_id),
    'media': media
  }
  const data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}

/**
 * The function sends photo to the chat by bot
 * 
 * @param  {string} photo photo's id
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 * 
 */
function send_photo(photo, chat_id, api) {
  const payload = {
    'method': 'sendPhoto',
    'chat_id': String(chat_id),
    'photo': photo
  }
  const data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}

/**
 * The function sends a message to the chat by bot with reply
 * 
 * @param  {string} msg Text to be sent
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 */
function send_reply(msg, chat_id, msg_id, api) {
  var payload = {
  'method': 'sendMessage',
  'chat_id': String(chat_id),
  'text': msg,
  'reply_to_message_id': msg_id,
  'parse_mode': 'HTML'
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}

/**
 * The function deletes a message from the chat
 * 
 * @param  {number} chat_id
 * @param  {number} msg_id Message's id to be deleted
 * @param  {string} api Bot's API
 */
function delete_msg(chat_id, msg_id, api) {
  var payload = {
  'method': 'deleteMessage',
  'chat_id': String(chat_id),
  'message_id': String(msg_id),
  'parse_mode': 'HTML'
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}

/**
 * The function sends an inline-keyboard to the chat
 * 
 * @param  {string} msg Text to be sent
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 * @param  {object} keyboard The keyboard to be sent
 * 
 */
function send_key(msg, chat_id, api, keyboard)
{
  var payload = {
    'method': 'sendMessage',
    'chat_id': String(chat_id),
    'text': msg,
    'parse_mode': 'HTML',
    reply_markup : JSON.stringify(keyboard)
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}

/**
 * The function removes ReplyKeyboardMarkup
 * 
 * @param  {string} msg Text to be sent
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 * 
 */
function send_removeKeyboard(msg, chat_id, api) {
   var payload = {
    'method': 'sendMessage',
    'chat_id': String(chat_id),
    'text': msg,
    'parse_mode': 'HTML',
    'reply_markup' : JSON.stringify({'remove_keyboard': true})
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data); 
}

/**
 * The function sends GIF animation to the chat by bot
 * 
 * @param  {string} file_id GIF's id in telegram
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 * 
 */
function send_animation(file_id, chat_id, api) {
  var payload = {
  'method': 'sendAnimation',
  'chat_id': String(chat_id),
  'animation': String(file_id)
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}

/**
 * The function deletes an inline-keyboard
 * 
 * @param  {number} chat_id
 * @param  {number} msg_id Message's id corresponding to the keyboard
 * @param  {string} api Bot's API
 * 
 */
function delete_inline(chat_id, msg_id, api) {
  var payload = {
    'method': 'editMessageReplyMarkup',
    'chat_id': String(chat_id),
    'message_id': String(msg_id)
  }
  var Data = {
    'method': 'post',
    'payload': payload
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', Data); 
}

/**
 * The function edit an inline-keyboard
 * 
 * @param  {number} chat_id
 * @param  {number} msg_id Message's id corresponding to the keyboard
 * @param  {string} api Bot's API
 * @param  {object} keyboard  The keyboard to be sent instead of current one
 * 
 */
function edit_inline(chat_id, msg_id, api, keyboard) {
  var payload = {
    'method': 'editMessageReplyMarkup',
    'chat_id': String(chat_id),
    'message_id': String(msg_id),
    'reply_markup': JSON.stringify(keyboard)
  }
  
  var Data = {
    'method': 'post',
    'payload': payload
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', Data); 
}

/**
 * The function sends the typing action
 * 
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 * 
 */
function send_action(chat_id,api) { //переименовать
  var payload = {
    'method': 'sendChatAction',
    'chat_id': String(chat_id),
    'action': 'typing'
  }
  var Data = {
    'method': 'post',
    'payload': payload
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', Data); 
}
