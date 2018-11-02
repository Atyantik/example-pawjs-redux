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
          <h1 className={styles.title}>Redux + ReactPWA</h1>
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
                    <button type="button" onClick={e => this.decrementCounter(e)} className={styles.btn}>
                      Decrement Counter
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
            href="https://github.com/Atyantik/example-pawjs-redux.git"
            className={classNames(styles.btn, styles.black)}
          >
            View source code
          </a>
        </div>
        <div className={styles.mw800}>
          <div className={styles.row}>
            <div className={styles.col8}>
              <div className={styles.p2}>
                <div>
                  This is an example project of implementing Redux with&nbsp;
                  <a
                    href="https://www.reactpwa.com"
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                    className={styles.link}
                  >
                    ReactPWA boilerplate
                  </a>
                  &nbsp;along with&nbsp;
                  <a
                    href="https://github.com/atyantik/pawjs"
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                    className={styles.link}
                  >
                    PawJS
                  </a>
                </div>
                <div className={styles.p1}>
                  If you wish to contribute more to the project please visit us at&nbsp;
                  <a
                    href="https://www.opencollective.com/react-pwa"
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                    className={styles.link}
                  >
                    https://www.opencollective.com/react-pwa
                  </a>
                </div>
                <div className={styles.p1}>
                  <a
                    href="https://opencollective.com/react-pwa/donate"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <img alt="open-collective" src="https://opencollective.com/react-pwa/contribute/button@2x.png?color=blue" width="250" />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.col4}>
              <div className={styles.p2}>
                <script src="https://codefund.io/scripts/fefc6de5-a0ce-46e8-a15d-f43733b5b454/embed.js" />
                <div id="codefund_ad" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
