//测试而已 没啥用
var React = require('react');
var ReactDOM = require('react-dom');
var Transition = require('react-inline-transition-group');

var Demo = React.createClass({

  getInitialState: function() {
    return {count: 1};
  },

  handleAdd : function() {
    this.setState(function (previousState) {
      return {count: previousState.count + 1};
    });
  },

  handleRemove : function () {
    this.setState(function (previousState) {
      return {count: Math.max(previousState.count - 1, 0)};
    });
  },

  handlePhaseEnd : function (phase, id) {
    if (phase === 'leave') console.log(id + ' left');
  },

  render() {
    const styles = {
      container: {
        width: '500px',
      },

      base: {
        width: '100%',
        height: '50px',
        background: '#4CAF50',
        opacity: 0,
      },

      appear: {
        opacity: 1,
        transition: 'all 500ms',
      },

      leave: {
        opacity: 0,
        transition: 'all 250ms',
      },

      custom: {
        background: '#3F51B5',
      },
    };

    const elems = [];

    // Don't forget that for most React components use array indexes as
    // keys is a bad idea (but not for this example).
    for (var i = 0; i < this.state.count; i++)
      elems.push(<div key={i} id={i} style={i % 2 ? styles.custom : {}}>{i}</div>);

    return (
      <div>
        <div>
          <button onClick={this.handleAdd}>Add</button>
          <button onClick={this.handleRemove}>Remove</button>
        </div>
        <Transition
          childrenStyles={{
            base: styles.base,
            appear: styles.appear,
            enter: styles.appear,
            leave: styles.leave,
          }}
          onPhaseEnd={this.handlePhaseEnd}
          style={styles.container}
        >
          {elems}
        </Transition>
      </div>
    );
  }
});

//ReactDOM.render(<Demo />, document.getElementById('container'));
module.exports = Demo;