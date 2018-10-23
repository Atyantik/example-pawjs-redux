import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from './actions';


const styles = {
  container: {
    textAlign: 'center',
    marginTop: '30px',
  },
  title: {
    fontSize: '38px',
  },
  btn: {
    margin: '18px',
    backgroundColor: '#008CBA',
    border: 'none',
    padding: '12px 28px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '800',
  },
  value: {
    fontSize: '24px',
    fontWeight: '900',
  },

};

export default @connect(state => ({
  counterValue: _.get(state.counter, 'count', 0),
}))
class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    counterValue: PropTypes.number,
  };

  static defaultProps = {
    dispatch: () => {},
    counterValue: 0,
  };

  incrementCounter(e) {
    const { dispatch } = this.props;
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    dispatch(incrementCounter());
  }

  decrementCounter(e) {
    const { dispatch } = this.props;
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    dispatch(decrementCounter());
  }

  render() {
    const { counterValue } = this.props;
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Redux Counter</h1>
        <div>
          <button type="button" onClick={e => this.incrementCounter(e)} style={styles.btn}>
            Increment Counter
          </button>
        </div>
        <div style={styles.value}>
          {counterValue}
        </div>
        <div>
          <button type="button" onClick={e => this.decrementCounter(e)} style={styles.btn}>
            Decrement Counter
          </button>
        </div>
      </div>
    );
  }
}
