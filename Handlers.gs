function my_adaptation_handler(msg_data) {
  const Adaptation = SpreadsheetApp.getActive().getSheetByName('Моя адаптация');
  const msg = 'Задачи в 1 рабочий день';

  //for 1st day

  const first_day_list = Adaptation.getRange(1,1,Adaptation.getLastRow(),1).getValues().flat();
  for (i=1; i<first_day_list.length; i++) {
    Telegram.send_key(first_day_list[i],msg_data.chat_id,API,Keyboard_check)
  }

}