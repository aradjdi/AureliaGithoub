import {inject} from 'aurelia-framework';
import {DemoGithubRepositories} from 'github-api-v3/repositories';

@inject(DemoGithubRepositories)
export class DemoRepository {

  constructor(demoGithubRepositories) {
    this.repositoriesApi = demoGithubRepositories;
  }

  activate(params, routeConfig) {
    this.login = params.login;
    this.name = params.name;
    this.sha = params.sha;
  }
}
