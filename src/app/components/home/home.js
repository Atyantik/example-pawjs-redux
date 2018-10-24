import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
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
        <div className={styles.mw500}>
          <h1 className={styles.title}>Redux counter</h1>
          <div className={styles.row}>
            <div className={styles.col6}>
              <div className={styles.row}>
                <div className={styles.col12}>
                  <div>
                    <button type="button" onClick={e => this.incrementCounter(e)} className={styles.btn}>
                      Increment Counter
                    </button>
                  </div>
                </div>
                <div className={styles.col12}>
                  <div>
                    <button type="button" onClick={e => this.incrementCounter(e)} className={styles.btn}>
                      Increment Counter
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col6}>

              <div className={styles.value}>
                {counterValue}
              </div>
            </div>

          </div>
        </div>
        <div className={styles.mt}>
          <a
            href="https://github.com/Atyantik/example-pawjs-tailwind.git"
            className={classNames(styles.btn, styles.black)}
          >
            View source code
          </a>
        </div>
      </div>
    );
  }
}
