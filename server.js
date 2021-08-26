const express = require('express')
const {
    graphqlHTTP
} = require('express-graphql')
const { schema } = require('./Graphiql')
const app = express()


app.use('/graphiqltest', graphqlHTTP({
    schema: schema, 
    graphiql: true
}))

app.listen (5000, () => console.log('server running'))
