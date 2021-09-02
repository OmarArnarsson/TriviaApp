//const express = require('express')
const restify = require('restify');
//const {
   // graphqlHTTP
//} = require('express-graphql')
const { schema } = require('./Graphiql')
const { graphqlRestify, graphiqlRestify} = require('apollo-server-restify')
//const cors = require('cors')
//const app = express()
//const app = restify.createServer();
const corsMiddleware = require('restify-cors-middleware');

//app.use(cors())


//app.use('/graphqltest', graphqlHTTP({
    //schema: schema, 
    //graphiql: true
//}))

/*app.use(
    function crossOrigin(req,res,next){
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      return next();
    }
);*/
/*

app.post(
    '/graphqltest',
    graphqlHTTP({
      schema: schema,
      graphiql: false,
    }),
  );
  
  app.get(
    '/graphqltest',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
  );
  */

  const app = restify.createServer();

const cors = corsMiddleware({
    origins: ["*"],
    allowHeaders: ["Authorization"],
    exposeHeaders: ["Authorization"]
});

app.pre(cors.preflight);
app.use(cors.actual);

  const graphQLOptions = { schema };

  app.use(restify.plugins.bodyParser());
  app.use(restify.plugins.queryParser());

  app.post('/graphql', graphqlRestify(graphQLOptions));
  app.get('/graphql', graphqlRestify(graphQLOptions));

 app.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }));

const Port = process.env.Port || 5000;

app.listen (Port, () => console.log('server running'))
