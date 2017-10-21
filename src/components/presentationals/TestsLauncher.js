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
          <li key={test.id}>[TEST] {test.description}</li>
        ))}
      </ul>
    )
  }
  getResults() {
    const { tests } = this.props

    return (
      <div>
        <div className="tests-launcher-meta">
          <p>Passed: {tests.passedTests.length}</p>
          <p>Failed: {tests.failedTests.length}</p>
          <p>Running: {tests.runningTests.length}</p>
        </div>
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
            <li key={test.id}>Running...</li>
          ))}
        </ul>
      </div>
    )
  }
  startEveryTests() {
    const { startTests, finishTest, tests } = this.props

    /* 
    * These instructions are not instantaneous but are enough
    * for our time precision level
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
        {/* getResults & getFirstDisplay could be pure components */}
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
