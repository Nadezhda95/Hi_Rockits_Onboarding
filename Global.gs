const messagesSheet = SpreadsheetApp.getActive().getSheetByName('Messages');
//const sideDictSheet = SpreadsheetApp.getActive().getSheetByName('Справочник');
const dictSheet = SpreadsheetApp.getActive().getSheetByName('ЕРС');
const journalSheet = SpreadsheetApp.getActive().getSheetByName('Журнал');
const loggerSheet = SpreadsheetApp.getActive().getSheetByName('Logger');

const autoDaFe = SpreadsheetApp.openById('172ToB8sR12OYolvrWJKn3xfNejcMu5wDLAOrv7cxQys');
const usersIDSheet = autoDaFe.getSheetByName('Users ID');

const numColNameDict = 1;
const numColDepartmentDict = 3;
const numColTeamDict = 4;
const numColMailDict = 5;
const numColLoginDict = 6;
const numColPhoneDict = 7;
const numColRegisterTypeDict = 8;
const numColEmploymentDateDict = 11;
const numColMonthsDict = 23;

const numColMonthsSideDict = 2;
const numColReminderSideDict = 3;
const numColChatIDSideDict = 4;
const numColChecksSideDict = 5;

const checksAmount = 16 //7 (в первый день) + 3*3 (на каждый месяц работы)
const weeksInTemp = 13 //3 мес * 4 нед

const root_chatId = -643319661;




