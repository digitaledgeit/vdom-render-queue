# vdom-render-queue

Queue repeated virtual-dom `diff`ing and `patch`ing operations until the next repaint.

## Installation

    npm i --save vdom-render-queue

## Usage
    
    var h = require('virtual-dom/h');
    var queue = require('vdom-render-queue');
    
    var render = queue(document.body, function() {
      return h('h1', 'Hello World!');
    });
    
    render();
    render();
    render();

## API

### queue(el : HTMLElement, fn : function)

Create a queued render method.

### render(force : bool)

Queue a render operation until the next repaint, or force the render operation to occur immediately.

## License

The MIT License (MIT)

Copyright (c) 2015 James Newell