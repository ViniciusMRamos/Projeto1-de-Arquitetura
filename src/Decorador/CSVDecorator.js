import ArquivoDecorator from "./ArquivoDecorator.js";

// Decorador para converter para CSV
export default class CSVDecorator extends ArquivoDecorator {
  // Implementação da conversão para CSV
  output (cities) {
    let _csv = 'Dados em formato CSV:\n';

        for (let i = 0; i < cities.length; i++) {
          _csv += `${cities[i]['ID']},`+` ${cities[i]['Nome']}, `+` ${cities[i]['Estado']} \n`;
        }

    return _csv;
  }
  
  getData() {
      const data = this.source.getData();
      
      return this.output(data);
    }
  }