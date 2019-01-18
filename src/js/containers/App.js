import fs from 'fs';

import {h, Component} from 'preact';
import jsyaml from 'js-yaml';

import CalendarMonth from "../components/CalendarMonth";
import Date from '../components/Date';
import {getTodayAnchor} from '../utils/date';

let datesYaml = fs.readFileSync('./src/data/dates.yaml', 'utf8');
let dates = jsyaml.safeLoad(datesYaml);

let namesYaml = fs.readFileSync('./src/data/names.yaml', 'utf8');
let names = jsyaml.safeLoad(namesYaml);

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      calendarShown: false,
    };

    this.toggleCalendar = this.toggleCalendar.bind(this);
  }

  renderCalendar() {
    return Array.from(new Array(12), (value, index) => index + 1)
      .map(month => <CalendarMonth key={month} month={month}/>);
  }

  toggleCalendar(ev) {
    ev.preventDefault();
    this.setState({ calendarShown: !this.state.calendarShown });
  }

  render() {
    return (
      <div>
        {dates.map(date => <Date date={date} names={names} key={date.day}/>)}

        <div class="scrollers bg-white tr br2">
          <div class={this.state.calendarShown ? 'db' : 'dn'}>
            <div class="scrollers-calendar calendar">
              {this.renderCalendar()}
            </div>
            <div class="bb b--moon-gray mv2"></div>
          </div>
          <div>
            <a class="dib f3 link pv2 ph3 br2 gray hover-bg-lightest-blue" href="#/">☝️</a>
            <a class="dnb f3 link pv2 ph3 br2 gray hover-bg-lightest-blue" href={`#${getTodayAnchor()}`}>🎉</a>
            <a class="dib f3 link pv2 ph3 br2 gray pointer hover-bg-lightest-blue" onClick={this.toggleCalendar}>📅</a>
          </div>
        </div>
      </div>
    )
  }

}
