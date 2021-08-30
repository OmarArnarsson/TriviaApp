const express = require('express')
const {
    graphqlHTTP
} = require('express-graphql')
const { schema } = require('./Graphiql')
const cors = require('cors')
const app = express()

app.use(cors())


app.use('/graphqltest', graphqlHTTP({
    schema: schema, 
    graphiql: true
}))

const Port = process.env.Port || 5000;

app.listen (Port, () => console.log('server running'))
