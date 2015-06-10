Meteor.startup(function () {
  // Required by Material UI http://material-ui.com/#/get-started
  injectTapEventPlugin();
  // React component mounted in the DOM
  React.render(<Main />, document.body);
});