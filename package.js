Package.describe({
  name:     'ksrv:datatables',
  version:  '0.0.1',
  summary:  'jQuery dataTables plugin wrapper',
  git:      'https://github.com/ksrv/datatables',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('jquery');
  api.addFiles('jquery.dataTables.min.js', ['client']);
});
