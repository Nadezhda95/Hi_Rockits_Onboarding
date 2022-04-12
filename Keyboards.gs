const Menu_keyboard = 
{
  "keyboard": [
    ["Моя адаптация", "Развитие", "О компании"],
    ["Инфо для Самозанятых"], ["Инфо для штатных сотрудников"], ["Инфо для ИП"],
    ["Твой руководитель", "Обратная связь"],
    ["Полезные контакты", "Мои контакты",]
  ],
  "resize_keyboard": true
}

let Keyboard_check =
  {
      "inline_keyboard": [
        [{"text": "Готово", "callback_data": "check"}]
      ],
      "resize_keyboard": true
  }; 