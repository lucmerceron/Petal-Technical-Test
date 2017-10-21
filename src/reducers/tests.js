import {
  START_TESTS,
  FINISH_TEST,
  RESET_TESTS,
} from '../actionCreators/tests'

import testList from '../constants/testList'

export default function tests(state = testList, action) {
  switch (action.type) {
    case START_TESTS:
    case FINISH_TEST:
    case RESET_TESTS:
    default:
      return state
  }
}
