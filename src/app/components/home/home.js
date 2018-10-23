import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from './actions';

// import custom CSS
import styles from './home.css';

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
      <div className={styles.container}>
        <h1 className={styles.title}>Redux Counter</h1>
        <div>
          <button type="button" onClick={e => this.incrementCounter(e)} className={styles.btn}>
            Increment Counter
          </button>
        </div>
        <div className={styles.value}>
          {counterValue}
        </div>
        <div>
          <button type="button" onClick={e => this.decrementCounter(e)} className={styles.btn}>
            Decrement Counter
          </button>
        </div>
      </div>
    );
  }
}
