import {inject, valueConverter} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ParseSuccessMessage, ParseErrorMessage} from 'parse-messages';

@valueConverter('decodeB64')
@inject(EventAggregator)
export class DecodeB64 {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  toView(value, format) {
    if (value === null)
      return '';
    var result = '';

    try {
      result = atob(value);
      this.eventAggregator.publish(new ParseSuccessMessage(result));
    } catch (err) {
      this.eventAggregator.publish(new ParseErrorMessage(err.message));
    }

    return result;
  }
}
