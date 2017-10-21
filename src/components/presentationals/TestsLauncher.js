import React from 'react'
import PropTypes from 'prop-types'

class TestsLauncher extends React.Component {
  constructor() {
    super()

    this.getFirstDisplay = this.getFirstDisplay.bind(this)
    this.getResults = this.getResults.bind(this)
    this.startEveryTests = this.startEveryTests.bind(this)
  }

  getFirstDisplay() {
    const { tests } = this.props

    return (
      <ul className="tests-launcher-first-display">
        {tests.testList.map(test => (
          <li key={test.id}>{test.description}</li>
        ))}
      </ul>
    )
  }
  getResults() {
    const { tests } = this.props

    return (
      <ul className="tests-launcher-results">
        {tests.passedTests.map(test => (
          <li key={test.id} className="tests-launcher-results-pass">
            [PASS] {test.description} : {test.time}
          </li>
        ))}
        {tests.failedTests.map(test => (
          <li key={test.id} className="tests-launcher-results-fail">
            [FAIL] {test.description} : {test.time}
          </li>
        ))}
        {tests.runningTests.map(test => (
          <li key={test.id}>...</li>
        ))}
      </ul>
    )
  }
  startEveryTests() {
    const { startTests, finishTest, tests } = this.props

    /* 
    * These instructions are not instantaneous but are enough
    * for our level of time precision
    */
    tests.testList.forEach(test => {
      test.run(passed => finishTest(test.id, passed))
    })
    startTests()
  }

  render() {
    const { tests, resetTests } = this.props

    const testRunning = tests.runningTests.length
    const testPassed = (tests.failedTests.length + tests.passedTests.length) === tests.testList.length

    const getCorrectButton = () => {
      if (testRunning) return <button onClick={resetTests}>Cancel</button>
      else if (testPassed) {
        return <button onClick={this.startEveryTests}>Re-run</button>
      }
      return <button onClick={this.startEveryTests}>Start</button>
    }

    return (
      <div className="tests-launcher">
        {getCorrectButton()}
        {testRunning || testPassed ? this.getResults() : this.getFirstDisplay() }
      </div>
    )
  }
}

TestsLauncher.propTypes = {
  tests: PropTypes.shape({
    testList: PropTypes.array,
    passedTests: PropTypes.array,
    failedTests: PropTypes.array,
    runningTests: PropTypes.array,
  }).isRequired,
  startTests: PropTypes.func.isRequired,
  finishTest: PropTypes.func.isRequired,
  resetTests: PropTypes.func.isRequired,
}

export default TestsLauncher
