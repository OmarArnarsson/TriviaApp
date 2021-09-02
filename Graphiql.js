const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql')
const {
    trivia,
    cat,
}= require('./trivia_client/src/data')

const TriviaType = new GraphQLObjectType({
    name: 'Trivia',
    description: 'contains a trivia question object',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        category: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLNonNull(GraphQLString) },
        difficulty: { type: GraphQLNonNull(GraphQLString) },
        question: { type: GraphQLNonNull(GraphQLString) },
        correct_answer: { type: GraphQLNonNull(GraphQLString) }
    })
})

const CatType = new GraphQLObjectType({
    name: 'Categories',
    description: 'contains a list of Categories',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        category: { type: GraphQLNonNull(GraphQLString) }
    })
})


const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'Top level query',
    fields: () => ({
        trivia: {
            type: new GraphQLList(TriviaType),
            description: 'List of questions',
            resolve: () => trivia
        },
        categories: {
            type: new GraphQLList(CatType),
            description: 'List of categories',
            resolve: () => cat
        },
        category: {
            type: GraphQLList(TriviaType), 
            description: 'Gives you questions from category',
            args: {
                category: { type:GraphQLString }
            },
            resolve: (parents, args) => trivia.filter(questions => questions.category === args.category)
        }
    })
})


const schema = new GraphQLSchema({
    query: Query
})

module.exports = { schema } ;
