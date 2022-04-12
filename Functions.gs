function user_auth(msg_data) {
  const Auth_Data = SpreadsheetApp.getActive().getSheetByName('Auth_Data');
  const auth_data_arr = Auth_Data.getRange(2,1,Auth_Data.getLastRow(),Auth_Data.getLastColumn()).getValues().flat();

  return auth_data_arr.indexOf(msg_data.text)
}

function get_name(ind) {
  const Auth_Data = SpreadsheetApp.getActive().getSheetByName('Auth_Data');
  const name = Auth_Data.getRange(ind+2,num_col_auth_name).getValue();

  return name
}

function test() {
  const text = '/nelrgne erjbvneojb';
  let command = new String();
  if (text.indexOf('/') == 0) {
    command = text.split(" ")[0]
  }

  Logger.log(command)
}