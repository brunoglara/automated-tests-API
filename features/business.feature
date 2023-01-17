Feature: Yelp Business API

  As API consumer
  I want to return business data
  So that build a location-based business application


  Scenario Outline: Search business by location
    Given I want to list business by location <city>
    When I do a get request
    Then I should get a list of business from searched location

    Examples:
      | city        |
      | 'sao paulo' |
      | 'new york'  |
      | 'london'    |
      | 'paris'     |
      | 'curitiba'  |

  Scenario Outline: Get business by Id
    Given I want get a business by <id>
    When I do a get request by id
    Then I should get a business by searched id

    Examples:
      | id                       |
      | "_GbfsMFxZeOzdYq4FagbAQ" |
      | "H4jJ7XB3CetIr1pg56CczQ" |
      | "mc1KLbA1Sy4kUTKo0ZEeRQ" |
      | "qq-0DAkiLPJivqCJff6nFw" |
      | "ncatZA3eLolFDmBwO4LlsA" |

  Scenario Outline: Get reviews by business Id
    Given I want get reviews by business id = <businessId>
    When I do a get request by business id
    Then I should get reviews by searched business id
    Examples:
      | businessId               |
      | "_GbfsMFxZeOzdYq4FagbAQ" |
      | "H4jJ7XB3CetIr1pg56CczQ" |
      | "mc1KLbA1Sy4kUTKo0ZEeRQ" |
      | "qq-0DAkiLPJivqCJff6nFw" |
      | "ncatZA3eLolFDmBwO4LlsA" |