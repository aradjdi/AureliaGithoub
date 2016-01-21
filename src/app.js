export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'search'], name: 'search', moduleId: 'search/index', nav: true, title: 'Search' },
      { route: 'repositories/:login/:name', name: 'repository', moduleId: 'repository/index' }
    ]);

    this.router = router;
  }
}
