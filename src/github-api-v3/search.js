import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class DemoGithubSearch {

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/search/');
    });

    this.http = http;
  }

  search(q) {
    return this.http.fetch(`repositories?q=${q}`)
      .then(response => response.json())
      .then(result => result.items);
  }
}
