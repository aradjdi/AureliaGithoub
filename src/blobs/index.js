import alertify from 'alertify.js';

import {inject} from 'aurelia-framework';
import {DemoGithubRepositories} from 'github-api-v3/repositories';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ParseMessage} from 'parse-messages';

@inject(DemoGithubRepositories, EventAggregator)
export class DemoRepository {
  blob = {};
  parseSubscription = {};

  constructor(demoGithubRepositories, eventAggregator) {
    this.repositoriesApi = demoGithubRepositories;
    this.eventAggregator = eventAggregator;
  }

  activate(params, routeConfig) {
    this.parseSubscription = this.eventAggregator.subscribe(ParseMessage, message => {
      if (message.type === 'success') {
        alertify.success('Success');
      }
      else if (message.type === 'error') {
        alertify.error(message.text);
      }
    });

    if (params.sha) {
      return this.repositoriesApi
        .getBlob(`${params.login}/${params.name}`, params.sha)
        .then(b => this.blob = b);
    }
  }

  deactivate() {
    this.parseSubscription.dispose();
  }
}
