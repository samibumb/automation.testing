Feature: YouTube Search
  As a user
  I want to search for videos on YouTube
  So that I can find the content I'm looking for

  Scenario Outline: Search for songs on YouTube
    Given I visit YouTube
    And I dismiss the cookie consent
    When I search for "<songName>"
    And I click the search button
    Then the URL should contain "youtube"

    Examples:
      | songName                            |
      | eminem - superman                   |
      | andrea bocelli love in portofino    |
