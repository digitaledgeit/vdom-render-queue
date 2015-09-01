var h = require('virtual-dom/h');
var queue = require('..');

var render = queue(document.body, function() {
  return h('h1', 'Hello World!');
});

render();
render();
render();