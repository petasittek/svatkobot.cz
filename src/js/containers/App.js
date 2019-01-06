import fs from 'fs';

import {h, Component} from 'preact';
import jsyaml from 'js-yaml';

import Date from './Date.js';
import { getTodayAnchor } from '../utils/date';

let datesYaml = fs.readFileSync('./src/data/dates.yaml', 'utf8');
let dates = jsyaml.safeLoad(datesYaml);

let namesYaml = fs.readFileSync('./src/data/names.yaml', 'utf8');
let names = jsyaml.safeLoad(namesYaml);

export default class App extends Component {

  render() {
    document.title = getTodayAnchor();

    return (
      <div>
        {dates.map(date => <Date date={date} names={names} key={date.day}/>)}

        <div className="scrollers bg-white pa2 br2">
          <a className="f3 link pa2" href="#/">☝️</a>
          <a className="f3 link pa2" href={`#${getTodayAnchor()}`}>🎉</a>
        </div>
      </div>
    )
  }

}
