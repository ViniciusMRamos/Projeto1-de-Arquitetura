import ArquivoDecorator from "./ArquivoDecorator.js";

// Decorador para converter para JSON
export default class JSONDecorator extends ArquivoDecorator {
  
  // Implementação da conversão para JSON
  output (cities) {
    let _json = 'Dados em formato JSON:\n';

        for (let i = 0; i < cities.length; i++) {
          _json += `\n {\n`+`  ID: ${cities[i]['ID']} \n`+`  Nome: ${cities[i]['Nome']} \n`+`  Estado: ${cities[i]['Estado']} \n`+`}`;
        }

    return _json;
  }

    getData() {
      const data = this.source.getData();
      
      return this.output(data);
    }
  }