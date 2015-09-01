var assert = require('assert');
var queue = require('..');
var h = require('virtual-dom/h');

var el;

describe('vdom-render-queue', function() {

  describe('render()', function() {

    beforeEach(function() {
      el = document.createElement('div');
      document.body.appendChild(el);
    });

    afterEach(function() {
      document.body.removeChild(el);
      el = null;
    });

    it('should call the fn() 4x', function(done) {
      var callCount = 0;

      var render = queue(el, function() {
        ++callCount;
        return h('h1');
      });

      render(true);
      render(true);
      render(true);
      render(true);

      setTimeout(function() {
        assert.equal(callCount, 4);
      }, 500);

    });

    it('should only call the fn() once', function(done) {
      var callCount = 0;

      var render = queue(el, function() {
        ++callCount;
        return h('h1');
      });

      render();
      render();
      render();
      render();

      setTimeout(function() {
        assert.equal(callCount, 1);
      }, 500);

    });

  });

});