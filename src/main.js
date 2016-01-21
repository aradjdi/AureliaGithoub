import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
  
  aurelia.use.feature('resources');

  aurelia.start().then(a => a.setRoot());
}
