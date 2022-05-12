const messagesSheet = SpreadsheetApp.getActive().getSheetByName("Messages");
const sideDictSheet = SpreadsheetApp.getActive().getSheetByName('Справочник');
const dictSheet = SpreadsheetApp.getActive().getSheetByName("ЕРС(тест)");

const numColNameDict = 1;
const numColDepartmentDict = 3;
const numColTeamDict = 4;
const numColMailDict = 5;
const numColLoginDict = 6;
const numColRegisterTypeDict = 8;
const numColMonthsDict = 23;
const numColReminderSideDict = 2;
const numColChatIDSideDict = 3;

const root_chatId = -643319661;


/*

Ваня, привет!

возвращаюсь к тебе с ОС по чат-боту
1) по механике работы с задачами
    - нужно задачи опустить в меню "Адаптация" и там сформировать задачи на 1 день, на 1 мес и т.д.
      а дальше человек проваливается и ему выходить список задач
      + настроить уведомления, если задачи просрочены

*/