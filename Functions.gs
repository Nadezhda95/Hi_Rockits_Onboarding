function user_auth(msg_data) {
  const Auth_Data = SpreadsheetApp.getActive().getSheetByName('Auth_Data');
  const auth_data_arr = Auth_Data.getRange(2,1,Auth_Data.getLastRow(),Auth_Data.getLastColumn()).getValues().flat();

  return auth_data_arr.indexOf(msg_data.text)
}
