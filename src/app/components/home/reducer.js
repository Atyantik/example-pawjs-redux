import _ from 'lodash';

const initialState = {
  count: 5,
};

export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return _.assignIn({}, state, {
        count: state.count + 1,
      });
    case DECREMENT_COUNT:
      return _.assignIn({}, state, {
        count: state.count - 1,
      });
    default:
      return state;
  }
};
