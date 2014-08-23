const traceur = require('traceur');


// for traceur < 0.0.50, not work in the new version.
traceur.options.experimental = true;

traceur.require.makeDefault(function(filename) {
  // don't transpile our dependencies, just our app
  return filename.indexOf('node_modules') === -1;
}, {
  // for traceur >= 0.0.51
  experimental: true
});
