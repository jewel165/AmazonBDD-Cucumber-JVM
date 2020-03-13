Feature: LogIn to Amazon

  Background: 
    Given user open chrome browser
    When user navigates to url "https://www.amazon.com/"
    Then user clciks on LogIn button
    And user enters email as "juie165@yahoo.com"
    Then user clciks on continue button

  @smoke
  Scenario: LogIn with valid information
    And user ecters password as "bk11208bk"
    Then user Clicks on signin
    Then users name should appear in the pannel
    And user clcik on signout from menu
    Then user closes the browser

  @Regression
  Scenario: Try to LogIn with invalid Password
    And user ecters password as "bk11208bk11"
    Then user Clicks on signin
    Then User Should see Incorrect Password message
    And user closes the browser
