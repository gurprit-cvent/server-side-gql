const schema = `#graphql
 type Person {
    name: String!
 }

 interface Character {
    name: String!
    origin: String!
    age: Int!
 }

 type Witcher implements Character {
    name: String!
    origin: String!
    age: Int!
    school: String!
    blade: String!
 }

 type Vampire implements Character {
    name: String!
    origin: String!
    age: Int!
    power: String!
    type: String! #bruxa, kikimora, etc
 }

 type Query {
    me: Person!
    characters: [Character!]!
 }
`

export default schema
