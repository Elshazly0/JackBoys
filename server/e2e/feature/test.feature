Feature: Dota
    search for heros.

    Scenario Outline: search HEros
        When I send GET request to get heros
        Then I get <{}> of heros



        Examples:
            | {string} | {} |

            |  | ABADDON |


