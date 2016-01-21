import {inject} from 'aurelia-framework';
import {DemoGithubRepositories} from 'github-api-v3/repositories';

@inject(DemoGithubRepositories)
export class DemoRepository {
  blob = {};

  constructor(demoGithubRepositories) {
    this.repositoriesApi = demoGithubRepositories;
  }

  activate(params, routeConfig) {
    if (params.sha) {
      return this.repositoriesApi
        .getBlob(`${params.login}/${params.name}`, params.sha)
        .then(b => this.blob = b);
    }
  }
}
