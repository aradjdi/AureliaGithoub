import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class DemoGithubRepositories {

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/repos/')
        .withDefaults({
          headers: {
            'Authorization': 'token d9e072b8e5829eae40a20a84fc6a0c698f80b5ce'
          }
        });
    });

    this.http = http;
  }

  // https://api.github.com/repos/aurelia/framework
  getRepository(full_name) {
    return this.http.fetch(full_name)
      .then(response => response.json());
  }

  // https://api.github.com/repos/aurelia/framework/commits
  getCommits(full_name) {
    return this.http.fetch(`${full_name}/commits`)
      .then(response => response.json());
  }

  // https://api.github.com/repos/aurelia/framework/git/trees/abb98a3f82aa26d101717a21303ccca9dde705e0
  getTree(full_name, sha) {
    return this.http.fetch(`${full_name}/git/trees/${sha}`)
      .then(response => response.json())
      .then(result => result.tree);
  }
}
