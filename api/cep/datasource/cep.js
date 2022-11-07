const { RESTDataSource } = require('apollo-datasource-rest')

class CepAPI extends RESTDataSource {
  constructor(){
    super()
    this.baseURL = 'http://viacep.com.br/ws/'
  }

  async getCepById(cep_id) {
    const cep = await this.get(`/${cep_id}/json`)
    return cep
  }
}

module.exports = CepAPI