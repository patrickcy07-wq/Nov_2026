Feature: Login functionality

Scenario: Valid login
  Given user launches the application
  When user enters username
  And user enters password
  Then user should see the home page