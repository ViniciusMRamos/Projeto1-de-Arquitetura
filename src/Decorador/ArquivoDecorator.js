// Classe decoradora abstrata DataDecorator
export default class ArquivoDecorator {

  constructor(source) {
      this.source = source;
    }
  
    getData() {
      return this.source.getData();
    }
  }