import {h, Component} from 'preact';

import {getDateAnchor, getTodayAnchor, getDateText} from '../utils/date';
import {getRandomEmoji} from "../utils/emoji";

export default class Date extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // Keep static until any relevant feature comes
    return false;
  }

  renderNames(namedays, names) {
    return namedays.map(name => {
        let sex = names[name] && names[name].sex;
        let emoji = getRandomEmoji(sex);

        return (
          <li key={name} class="dib">
            <a
              class="br2 dib pa2 link dark-gray hover-bg-lightest-blue"
              href={`https://cs.wikipedia.org/wiki/${name}`}
              target="_blank"
            >
              {emoji} {name}
            </a>
          </li>
        );
      }
    );
  }

  render({ date, names }) {
    let dateText = getDateText(date.day);
    let dateAnchor = getDateAnchor(date.day);
    let todayAnchor = getTodayAnchor();

    return (
      <article id={dateAnchor} class="bb b--moon-gray pt3 pb1 ph2">
        <a href={`#${dateAnchor}`} class="link dark-gray">
          <time datetime={date.day} class="f5 b">
            {dateText}
          </time>
          {dateAnchor === todayAnchor && <span class="ml2">🎉</span>}
        </a>
        <ul class="list ma0 ph0 pv2">
          {this.renderNames(date.names, names)}
        </ul>
      </article>
    )
  }

}
