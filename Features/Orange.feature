Feature: OrangeHRM Recruitment

  Background:
    Given I am on the OrangeHRM login page
    When I enter valid username and password
    And I click on the login button


@Recruitment
Scenario: Search candidate using vacancy and hiring manager
    When I click on Recruitment tab
    And I search candidate using "estagiario" and "Rebecca Poli" and ""
    And I click on Search button
    Then matching candidate records should be displayed