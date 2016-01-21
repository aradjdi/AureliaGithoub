import {inject, computedFrom} from 'aurelia-framework';
import {DemoGithubSearch} from 'github-api-v3/search';

@inject(DemoGithubSearch)
export class DemoSearch {
  oldQuery = '';
  query = 'aurelia';
  repositories = [];

  constructor(demoGithubSearch) {
    this.searchApi = demoGithubSearch;
  }

  @computedFrom('query')
  get search() {
    if (this.query && this.query !== this.oldQuery) {
      this.oldQuery = this.query;
      this.searchApi
        .search(this.query)
        .then(repositories => this.repositories = repositories);
    }

    return this.query;
  }

  activate() {
    this.oldQuery = '';
  }
}
