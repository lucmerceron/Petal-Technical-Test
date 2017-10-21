import makeActionCreator from './makeActionCreator'

/* Action types */
export const START_TESTS = 'START_TESTS'
export const FINISH_TEST = 'FINISH_TEST'
export const RESET_TESTS = 'RESET_TESTS'

/* Action creators */
export const startTests = makeActionCreator(START_TESTS)
export const finishTest = makeActionCreator(FINISH_TEST, 'testId', 'result')
export const resetTests = makeActionCreator(RESET_TESTS)

/* Thunk action creators */
/* The application having no API to call, we do not have asynchronous thunk actions */
