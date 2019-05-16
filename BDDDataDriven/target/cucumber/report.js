$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/SeleniumWorkspace/BDDDataDriven/src/main/java/Feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login in PPE application",
  "description": "",
  "id": "login-in-ppe-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "PPE login",
  "description": "",
  "id": "login-in-ppe-application;ppe-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Agent Already On Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Tittle Of Login Page Is Login",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Agent Entering \"ih.chelms\" and \"10#Hammer\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "URL Of LoggedIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click GuidLines Link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.Agent_Is_Already_On_Login_Page()"
});
formatter.result({
  "duration": 7432718711,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.Tittle_Of_The_Login_Page_Is_Login()"
});
formatter.result({
  "duration": 11485188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ih.chelms",
      "offset": 16
    },
    {
      "val": "10#Hammer",
      "offset": 32
    }
  ],
  "location": "LoginStepDefination.Agent_Entering_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 310830921,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_Login_Button()"
});
formatter.result({
  "duration": 6473681477,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.URL_Of_The_LoggedIn_Page()"
});
formatter.result({
  "duration": 14020518,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.Click_On_GuidLines_Link()"
});
formatter.result({
  "duration": 132663258,
  "status": "passed"
});
});