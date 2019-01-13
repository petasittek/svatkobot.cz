import {h, Component} from 'preact';

import {getMonthAnchor, getMonthEmoji, getMonthFirstLetter} from '../utils/date';

export default class CalendarMonth extends Component {

  render({ month }) {
    let emoji = getMonthEmoji(month);
    let letter = getMonthFirstLetter(month).toUpperCase();
    let anchor = getMonthAnchor(month);

    return (
      <a class="db f3sd link pa2 gray" href={`#${anchor}`}>
        {emoji} {letter}
      </a>
    )
  }

}
