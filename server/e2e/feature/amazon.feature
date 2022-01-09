
Feature: Amazon
    search for items.

    Scenario Outline: search on amazon
        Given a string <{string}>
        When I send GET request to search
        Then I get <{}> of items



        Examples:
            | {string} | {} |

            | "playstation" | $50 PlayStation Store Gift Card [Digital Code] |
