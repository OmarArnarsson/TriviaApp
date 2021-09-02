const restify = require('restify');
const { schema } = require('./Graphiql')
const { graphqlRestify, graphiqlRestify} = require('apollo-server-restify')
const corsMiddleware = require('restify-cors-middleware');


const app = restify.createServer();

/*Fyrir cross origin þar sem serverinn og framendinn eru ekki á sama porti.*/
const cors = corsMiddleware({
    origins: ["*"],
    allowHeaders: ["Authorization"],
    exposeHeaders: ["Authorization"]
});

app.pre(cors.preflight);
app.use(cors.actual);

/*Skeman sem er skilgreind í Graphiql.js til að tilgreina hvernig á að meðhöndla get og post*/
const graphQLOptions = { schema };

app.use(restify.plugins.bodyParser());
app.use(restify.plugins.queryParser());

app.post('/graphql', graphqlRestify(graphQLOptions));
app.get('/graphql', graphqlRestify(graphQLOptions));
app.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }));

const Port = process.env.Port || 5000;

app.listen (Port, () => console.log('server running'))
