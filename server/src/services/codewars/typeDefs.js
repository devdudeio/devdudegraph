import {gql} from "apollo-server-express";

const typeDefs = gql`
    extend type Query {
        myCodewarsUser: CodewarsUser!
    }

    type CodewarsUser {
        username: String!
        name: String!
        honor: Int!
        clan: String!
        leaderboardPosition: Int
        skills: [String!]!
        codeChallenges: CodewarsUserCodeChallenges!
    }
    
    type CodewarsUserCodeChallenges{
        totalAuthored: Int!
        totalCompleted: Int!
    }
    
`

export default typeDefs;



/*

{
    "username": "devdudeio",
    "name": "DevDude",
    "honor": 109,
    "clan": "",
    "leaderboardPosition": null,
    "skills": [],
    "ranks": {
        "overall": {
            "rank": -6,
            "name": "6 kyu",
            "color": "yellow",
            "score": 80
        },
        "languages": {
            "javascript": {
                "rank": -7,
                "name": "7 kyu",
                "color": "white",
                "score": 54
            },
            "typescript": {
                "rank": -7,
                "name": "7 kyu",
                "color": "white",
                "score": 26
            }
        }
    },
    "codeChallenges": {
        "totalAuthored": 0,
        "totalCompleted": 17
    }
}

 */