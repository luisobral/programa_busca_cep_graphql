const { ApolloServer } = require('apollo-server')
const cepSchema = require('./cep/schema/cep.graphql')
const cepResolvers = require('./cep/resolvers/cepResolvers')
const CepsAPI = require('./cep/datasource/cep')

const typeDefs = [cepSchema]
const resolvers = [cepResolvers]

const server = new ApolloServer( { 
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      cepsAPI: new CepsAPI()
    }
  }
} )

server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta ${url}`)
})