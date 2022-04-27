const messagesSheet = SpreadsheetApp.getActive().getSheetByName("Messages");
const adaptationSheet = SpreadsheetApp.getActive().getSheetByName('adaptationSheet');
const orderSheet = SpreadsheetApp.getActive().getSheetByName("Order");
const dictSheet = SpreadsheetApp.getActive().getSheetByName("ЕРС");

const numColNameDict = 1;
const numColDepartmentDict = 3;
const numColTeamDict = 4;
const numColMailDict = 5;
const numColLoginDict = 6;
const numColRegisterTypeDict = 8;
const numColMonthsDict = 23;
const numColReminderDict = 24;
const numColChatIDDict = 25;

const root_chatId = -643319661;