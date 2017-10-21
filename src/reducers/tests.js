import moment from 'moment'

import {
  START_TESTS,
  FINISH_TEST,
  RESET_TESTS,
} from '../actionCreators/tests'

const initState = {
  startTime: null, // <Date>
  results: {
    // [testId]: { passed: <bool>, finishTime: <Date> }
  },
}

export default function tests(state = initState, action) {
  switch (action.type) {
    case START_TESTS:
      return { ...initState,
        startTime: moment(),
      }
    case FINISH_TEST: {
      return { ...state,
        results: { ...state.results,
          [action.testId]: {
            passed: action.passed,
            finishTime: moment(),
          },
        },
      }
    }
    case RESET_TESTS:
      // To better the application, cancelable-promise could be use to reset the tests
      return { ...initState }
    default:
      return state
  }
}
