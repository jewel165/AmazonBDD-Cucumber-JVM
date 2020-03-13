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
formatter.uri("file:Features/AmazonSearch.feature");
formatter.feature({
  "name": "Amazon Search Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Amazon General Search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User open chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepps.user_open_chrome_browser_Search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate to url \"https://www.amazon.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepps.user_Navigate_to_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user varify that search bar is activate",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepps.user_varify_that_search_bar_is_activate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input data in search bar \"iphone\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepps.user_input_data_in_search_bar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Varify the search result",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepps.user_Varify_the_search_result()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"search\"]/span/span/h1/div/div[1]/div/div/span[3]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MDs-MacBook-Air.fios-router.home\u0027, ip: \u0027fe80:0:0:0:cd6:abbe:e2d5:bb11%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/tx/_y6jrbnj0_9...}, goog:chromeOptions: {debuggerAddress: localhost:50279}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 53cf17f32c4e6d7e7fb6e6aa763f8efb\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"search\"]/span/span/h1/div/div[1]/div/div/span[3]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy31.getText(Unknown Source)\n\tat pageObjects.AmazonSerach.VerifySRCresult(AmazonSerach.java:53)\n\tat stepDefination.Stepps.user_Varify_the_search_result(Stepps.java:137)\n\tat ✽.user Varify the search result(file:Features/AmazonSearch.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "user closes the bhrome browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepps.user_closes_the_bhrome_browser()"
});
formatter.result({
  "status": "skipped"
});
});