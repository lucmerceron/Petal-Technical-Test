import React from 'react'
import PropTypes from 'prop-types'

const TestsLauncher = ({ tests, startTests, finishTest, resetTests }) => (
  <div className="tests-launcher">
    {JSON.stringify(tests.testList, null, 2)}
  </div>
)

TestsLauncher.propTypes = {
  tests: PropTypes.shape({
    testList: PropTypes.array,
    passedTests: PropTypes.array,
    failedTests: PropTypes.array,
    runningTests: PropTypes.number,
  }).isRequired,
  startTests: PropTypes.func.isRequired,
  finishTest: PropTypes.func.isRequired,
  resetTests: PropTypes.func.isRequired,
}

export default TestsLauncher
