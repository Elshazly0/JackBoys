
Feature: Jumia
    search for items.

    Scenario Outline: search on Jumia
        Given a string <{string}>
        When I send GET request to Jumiasearch
        Then I get <{}> of items



        Examples:
            | {string} | {} |

            | "playstation" | Sony PlayStation 5 Console |
