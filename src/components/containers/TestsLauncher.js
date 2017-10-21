import { connect } from 'react-redux'

import { startTests, finishTest, resetTests } from '../../actionCreators/tests'
import TestsLauncher from '../presentationals/TestsLauncher'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(TestsLauncher)
