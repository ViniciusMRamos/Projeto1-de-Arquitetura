import XMLDecorator from "./src/Decorador/XMLDecorator";
import CSVDecorator from "./src/Decorador/CSVDecorator";
import JSONDecorator from "./src/Decorador/JSONDecorator";
import Arquivo from "./src/Decorador/Arquivo"
import HTMLDecorator from "./src/Decorador/HtmlDecorator";

import fs from 'node:fs';



const csvData = "./data/cidades-2.json";

const cities_json = fs.readFileSync(csvData);
  
const cities = JSON.parse(cities_json);



const dataSource = new Arquivo(cities);

////////////////////////////TESTES DO PADRÃO DECORATOR////////////////////////////

const xmlDecorator = new XMLDecorator(dataSource);
const csvDecorator = new CSVDecorator(dataSource);
const htmlDecorator = new HTMLDecorator(dataSource);
const jsonDecorator = new JSONDecorator(dataSource);

//  console.log(xmlDecorator.getData());
// console.log(csvDecorator.getData());
// console.log(htmlDecorator.getData());
// console.log(jsonDecorator.getData());




//////////////////////////////// TESTE DO PADRÃO SINGLETON //////////////////////

// import FormaterHTML from './src/FormaterHTML.js';
// import FormaterTXT from './src/FormaterTXT.js';
// import SingletonCitiesReporter  from './src/Singleton/CitiesReporterSingleton.js'

// const [cmd, script, param1] = process.argv,
//       filename = './data/cidades-2.json';

// const formaterStrategies = {
//   'html': new FormaterHTML(),
//   'txt': new FormaterTXT()
// };

// const citiesReporter = SingletonCitiesReporter.getInstance({ formaterStrategy: formaterStrategies[param1]});

// console.log(citiesReporter.report(filename));






