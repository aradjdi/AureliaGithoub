import {inject, customElement, bindable} from 'aurelia-framework';
import {DemoGithubRepositories} from 'github-api-v3/repositories';

@customElement('tree-viewer')
@inject(DemoGithubRepositories)
export class DemoTreeViewer {
  @bindable login;
  @bindable name;
  @bindable sha;

  tree = [];

  constructor(demoGithubRepositories) {
    this.repositoriesApi = demoGithubRepositories;
  }

  attached(params, routeConfig) {
    if (this.sha) {
      return this.repositoriesApi
        .getTree(`${this.login}/${this.name}`, this.sha)
        .then(t => this.tree = t);
    }
  }
}
