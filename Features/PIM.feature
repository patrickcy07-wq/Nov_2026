
Feature: OrangeHRM PIM Employee Search

  Background:
    Given I am on the OrangeHRM login page
    When I enter valid username and password
    And I click on the login button
    And I click on PIM tab
    And I click on Employee List

  @PIM
  Scenario: Search multiple employees in one browser session

    When I search employee using name "Linda Anderson" and ID ""
    And I search employee using name "" and ID "0010"
    And I search employee using name "John Smith" and ID "0015"
    And I search employee using name "" and ID "0020"
    Then employee records should be displayed
