'use strict';

describe('SandboxApp', () => {
  let React = require('react/addons');
  let SandboxApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SandboxApp = require('components/SandboxApp.js');
    component = React.createElement(SandboxApp);
  });

  it('should create a new instance of SandboxApp', () => {
    expect(component).toBeDefined();
  });
});
