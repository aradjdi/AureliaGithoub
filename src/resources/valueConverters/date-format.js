import moment from 'moment';
import {valueConverter} from 'aurelia-framework';

@valueConverter('dateFormat')
export class DateFormat {
  toView(value, format) {
    if (value === null)
      return '';
    return moment(value).format(format);
  }

  fromView(value, format) {
    if (value === '')
      return null;
    return moment(value, format).toDate();
  }
}
