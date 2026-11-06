
Feature: OrangeHRM Leave List

  Background:
    Given I am on the OrangeHRM login page
    When I enter valid username and password
    And I click on the login button

  @LeaveList
  Scenario: Search leave records
    When I click on Leave tab
    And I click on Leave List
    And I enter From Date "2026-01-01"
    And I enter To Date "2026-12-31"
    And I select Leave Type "CAN - Bereavement"
    And I click on Leave Search button
    Then leave records should be displayed
