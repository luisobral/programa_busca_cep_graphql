const cepResolvers = {
  Query: {
    cep: (root, { cep }, { dataSources }) => dataSources.cepsAPI.getCepById(cep)
  }
}

module.exports = cepResolvers