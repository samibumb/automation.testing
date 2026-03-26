Feature: YouTube Search
  As a user
  I want to search for videos on YouTube
  So that I can find the content I'm looking for

  Scenario: Search for Eminem - Superman on YouTube
    Given I visit YouTube
    And I dismiss the cookie consent
    When I search for "eminem - superman"
    And I click the search button
    Then the URL should contain "youtube"
