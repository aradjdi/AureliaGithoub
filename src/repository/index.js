import {inject} from 'aurelia-framework';
import {DemoGithubRepositories} from 'github-api-v3/repositories';

@inject(DemoGithubRepositories)
export class DemoRepository {
  repository = {};
  commits = [];

  constructor(demoGithubRepositories) {
    this.repositoriesApi = demoGithubRepositories;
  }

  activate(params, routeConfig) {
    this.repositoriesApi
      .getCommits(`${params.login}/${params.name}`)
      .then(c => this.commits = c)

    this.repositoriesApi
      .getRepository(`${params.login}/${params.name}`)
      .then(r => this.repository = r);
  }
}
