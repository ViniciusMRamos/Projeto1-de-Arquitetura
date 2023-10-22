import ArquivoDecorator from "./ArquivoDecorator.js";

// Decorador para converter para XML
export default class XMLDecorator extends ArquivoDecorator {

  
  // Implementação da conversão para XML 
  output (cities) {
    let xml = `Dados em formato XML:\n `;

    xml += `<cidades>`
        for (let i = 0; i < cities.length; i++) {
          xml += `  <cidade id ="`+`${cities[i]['ID']}`+`">\n`
          xml += `     <nome>${cities[i]['Nome']}</nome>\n`;
          xml += `     <estado>${cities[i]['Estado']}</estado>\n`;
          xml += `  </cidade>\n`;
        }

    xml += `</cidades>`;

    return xml;
  }

  getData() {
    const data = this.source.getData();
     
    return this.output(data);
  }
}