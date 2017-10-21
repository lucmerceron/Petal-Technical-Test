import { connect } from 'react-redux'

import { startTests, finishTest, resetTests } from '../../actionCreators/tests'
import TestsLauncher from '../presentationals/TestsLauncher'
import testList from '../../constants/testList'

// this could be memoized
const calculateTimeDiff = (start, end) => end.diff(start, 's', true)

const mapStateToProps = state => {
  const testsState = state.tests
  const defaultObj = { passedTests: [], failedTests: [], runningTests: 0 }

  if (!testsState.startTime) return { tests: { testList, ...defaultObj } }
  const results = testList.reduce((acc, test) => {
    const newAcc = { ...acc }
    const result = testsState.results[test.id]

    if (!result) newAcc.runningTests += 1
    else if (result.passed) {
      newAcc.passedTests.push({ ...test,
        time: calculateTimeDiff(testsState.startTime, result.finishTime),
      })
    } else {
      newAcc.failedTests.push(test)
    }

    return newAcc
  }, defaultObj)

  return { tests: { testList, ...results } }
}

const mapDispatchToProps = dispatch => ({
  startTests: () => dispatch(startTests()),
  finishTest: (testId, passed) => dispatch(finishTest(testId, passed)),
  resetTests: () => dispatch(resetTests()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TestsLauncher)
