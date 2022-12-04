Feature: Business

  Scenario Outline: Search business by location
    Given I want to list business by location <city>
    When I do a get request
    Then I should get a list of business from <city>

    Examples:
      | city        |
      | 'sao paulo' |
      | 'new york'  |
      | 'london'    |
      | 'paris'     |
      | 'curitiba'  |

