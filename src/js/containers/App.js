import fs from 'fs';

import {h, Component} from 'preact';
import jsyaml from 'js-yaml';

import CalendarMonth from "../components/CalendarMonth";
import Date from '../components/Date';
import {getTodayAnchor} from '../utils/date';
import {scrollToIdByEvent} from "../utils/scroll";

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
            <div class="bb b--moon-gray mv1"></div>
          </div>
          <div>
            <button class="dib pointer bw0 f3 ma12 pv2 ph3 br2 gray hover-bg-lightest-blue" data-scrollid="top" onClick={scrollToIdByEvent}>☝️</button>
            <button class="dib pointer bw0 f3 ma12 pv2 ph3 br2 gray hover-bg-lightest-blue" data-scrollid={getTodayAnchor()} onClick={scrollToIdByEvent}>🎉</button>
            <button class="dib pointer bw0 f3 ma12 pv2 ph3 br2 gray pointer hover-bg-lightest-blue" onClick={this.toggleCalendar}>📅</button>
          </div>
        </div>
      </div>
    )
  }

}
