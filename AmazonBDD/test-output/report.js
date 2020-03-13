$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/AmazonLogIn.feature");
formatter.feature({
  "name": "LogIn to Amazon",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user open chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepps.user_open_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to url \"https://www.amazon.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepps.user_navigates_to_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clciks on LogIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepps.user_clciks_on_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters email as \"juie165@yahoo.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepps.user_enters_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clciks on continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepps.user_clciks_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "LogIn with valid information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user ecters password as \"bk11208bk\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepps.user_ecters_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Clicks on signin",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepps.user_Clicks_on_signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users name should appear in the pannel",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepps.users_name_should_appear_in_the_pannel_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clcik on signout from menu",
  "keyword": "And "
});
formatter.match({
  "location": "Stepps.user_clcik_on_signout_from_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepps.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user open chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepps.user_open_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to url \"https://www.amazon.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepps.user_navigates_to_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clciks on LogIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepps.user_clciks_on_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters email as \"juie165@yahoo.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepps.user_enters_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clciks on continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepps.user_clciks_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Try to LogIn with invalid Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user ecters password as \"bk11208bk11\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepps.user_ecters_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Clicks on signin",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepps.user_Clicks_on_signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should see Incorrect Password message",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepps.user_Should_see_Incorrect_Password_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepps.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
});