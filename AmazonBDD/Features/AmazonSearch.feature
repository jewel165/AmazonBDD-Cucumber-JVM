Feature: Amazon Search Test

  @smoke
  Scenario: Amazon General Search
    Given User open chrome browser
    When User Navigate to url "https://www.amazon.com/"
    Then user varify that search bar is activate
    And user input data in search bar "iphone"
    Then user Varify the search result
    And user closes the bhrome browser
