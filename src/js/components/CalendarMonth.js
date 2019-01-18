import {h, Component} from 'preact';

import {getMonthAnchor, getMonthEmoji, getMonthFirstLetter, getMonthName} from '../utils/date';

export default class CalendarMonth extends Component {

  render({ month }) {
    let emoji = getMonthEmoji(month);
    let name = getMonthName(month);
    let anchor = getMonthAnchor(month);

    return (
      <a class="calendar__item db link pa2 br2 gray hover-bg-lightest-blue" href={`#${anchor}`}>
        {name} {emoji}
      </a>
    )
  }

}
