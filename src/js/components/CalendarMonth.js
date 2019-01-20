import {h, Component} from 'preact';

import {getMonthAnchor, getMonthEmoji, getMonthFirstLetter, getMonthName} from '../utils/date';
import {scrollToIdByEvent} from "../utils/scroll";

export default class CalendarMonth extends Component {

  render({ month }) {
    let emoji = getMonthEmoji(month);
    let name = getMonthName(month);
    let anchor = getMonthAnchor(month);

    return (
      <button class="calendar__item db bw0 pa2 br2 w-100 tr pointer gray hover-bg-lightest-blue" data-scrollid={anchor} onClick={scrollToIdByEvent}>
        {name} {emoji}
      </button>
    )
  }

}
