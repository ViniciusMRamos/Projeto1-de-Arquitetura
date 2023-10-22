import fs from 'node:fs';

class CitiesReporter {
  constructor ({ formaterStrategy }) {
    this._formaterStrategy = formaterStrategy;
    this._cities_json = null;
    this._cities = null;
  }

  _read (filename) {
    this._cities_json = fs.readFileSync(filename);
  }

  _parseJSON () {
    this._cities = JSON.parse(this._cities_json);
  }

  report (filename) {
    this._read(filename);
    this._parseJSON();
    return this._formaterStrategy.output(this._cities);
  }
}

let instance = null;

export default {
  getInstance({ formaterStrategy }) {
    if (!instance) {
      instance = new CitiesReporter({ formaterStrategy });
    }
    return instance;
  }
};






