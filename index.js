var render = require('vdom-render-to');

function queue(el, fn) {

  var
    queued = false,
    update = render(el)
  ;

  /**
   * Queue a virtual-dom node for rendering on the next frame
   * @param {boolean} force
   */
  return function(force) {
    if (force) {

      //force the render to occur now
      queued = false;
      update = update(fn());

    } else {

      //if the render isn't already queued then queue the render for the next frame
      if (!queued) {
        queued = true;
        window.requestAnimationFrame(function() {
          queued = false;
          update = update(fn());
        });
      }

    }
  };

}

module.exports = queue;
