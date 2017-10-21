function generateDummyTest() {
  const delay = 1000 + (Math.random() * 1000)
  const testPassed = Math.random() > 0.5

  return callback => {
    setTimeout(() => {
      callback(testPassed)
    }, delay)
  }
}

export default generateDummyTest
