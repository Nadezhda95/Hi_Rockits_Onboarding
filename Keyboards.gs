const Menu_keyboard = 
{
  'keyboard': [
    ['Моя адаптация'],
    ['Развитие', 'О компании', 'Инфо'],
    ['Обратная связь', 'Полезные контакты', 'Мои контакты',]
  ],
  'resize_keyboard': true
}

const Keyboard_check =
{
  'inline_keyboard': [
    [{'text': 'Готово', 'callback_data': 'check'}]
  ],
  'resize_keyboard': true
}; 

const Keyboard_info =
{
  'inline_keyboard': [
    [{'text': 'ЗП', 'callback_data': 'info_salary'}],
    [{'text': 'Выплата процентов', 'callback_data': 'info_percentage'}],
    [{'text': 'Отпуска', 'callback_data': 'info_vacation'}],
    [{'text': 'Больничные', 'callback_data': 'info_sick'}],
    [{'text': 'Как рассчитываетсчя стаж работы', 'callback_data': 'info_experience'}],
    [{'text': 'Страховые взносы, налоги', 'callback_data': 'info_tax'}],
    [{'text': 'Заказать справки', 'callback_data': 'info_form'}],
    [{'text': 'Можно ли поменять вид оформления', 'callback_data': 'info_registration'}],
    [{'text': 'Расчет при увольнении', 'callback_data': 'info_quit'}]
  ],
  'resize_keyboard': true
}; 


/*const Keyboard_progress =
{
  'inline_keyboard': [
    [{'text': 'База знаний', 'callback_data': 'progress_kb'}],
    [{'text': 'Букшеринг в офисе', 'callback_data': 'progress_booksharing'}]
  ],
  'resize_keyboard': true
}; */

const Keyboard_progress =
{
  'keyboard': [
    ['База знаний', 'Букшеринг в офисе'],
    ['Назад']
  ],
  'resize_keyboard': true
}





