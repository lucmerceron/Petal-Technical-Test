import {
  START_TESTS,
  FINISH_TEST,
  RESET_TESTS,
} from '../actionCreators/tests'

const initState = {
  startTime: null, // <Date>
  results: {
    // [id]: { result: <bool>, finishTime: <Date> }
  },
}

export default function tests(state = initState, action) {
  switch (action.type) {
    case START_TESTS:
      return { ...state,
        startTime: new Date(),
      }
    case FINISH_TEST: {
      return { ...state,
        results: { ...state.results,
          [action.testId]: {
            result: [action.result],
            finishTime: new Date(),
          },
        },
      }
    }
    case RESET_TESTS:
      return { ...initState }
    default:
      return state
  }
}
