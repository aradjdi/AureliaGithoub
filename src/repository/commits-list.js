import {inject, customElement, bindable} from 'aurelia-framework';
import {DemoGithubRepositories} from 'github-api-v3/repositories';

@customElement('commits-list')
@inject(DemoGithubRepositories)
export class DemoCommitsList {
  @bindable login;
  @bindable name;

  commits = [];

  constructor(demoGithubRepositories) {
    this.repositoriesApi = demoGithubRepositories;
  }

  attached(params, routeConfig) {
    return this.repositoriesApi
      .getCommits(`${this.login}/${this.name}`)
      .then(c => this.commits = c);
  }
}
