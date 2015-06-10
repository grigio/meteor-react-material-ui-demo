var {RaisedButton, DatePicker, AppBar, AppCanvas} = mui;

var ThemeManager = new mui.Styles.ThemeManager();

Main = React.createClass({
  
  // Required by Material UI
  childContextTypes: {
      muiTheme: React.PropTypes.object
  },
  getChildContext() {
      return {
          muiTheme: ThemeManager.getCurrentTheme()
      };
  },

  // Use `Session` or other reactive data sources ONLY if you have to communicate
  // with the rest of the Meteor stack
  componentWillMount() {
    Session.set('counter', 1 );
  },

  // Required to use Meteor reactive data sources
  mixins: [MeteorDataMixin],
  trackMeteorData(props, state) {
    // Put here your subscriptions
    return {
      counter: Session.get('counter')
    };
  },

  // react component private functions
  _reset() {
    Session.set('counter', 0 );
  },
  
  _increment() {
    Session.set('counter', this.data.counter + 1 );
  },

  _onChange(err, newDate) {
      console.log(newDate);
  },

  // We can customize the internal format date. Default is mm/dd/yyyy
  _dateFormat(date) {
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var y = date.getFullYear();
    return `${d}-${m}-${y}`;
  },

  render: function() {
    var styles = {
      paddingTop: '200px', textAlign:'center'
    }

    return (
      <AppCanvas>
        <AppBar title='Meteor ❤ React ❤ Material UI' iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <div className="spacer" style={styles}>
          <RaisedButton label={this.data.counter+" +1" } primary={true} onTouchTap={this._increment} />
          <RaisedButton label="reset" primary={false} onTouchTap={this._reset} />
          <DatePicker hintText="I'm a DatePicker try me!!" mode="portrait" formatDate={this._dateFormat}
                      onChange={this._onChange} />
        </div>
      </AppCanvas>
    );
  }

});