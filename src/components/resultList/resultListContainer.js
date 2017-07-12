import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import ResultList from './resultList'
import * as resultListActions from '../../actions/resultList'

function mapStateToProps(state) {
  return {
    resultList: state.resultList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(resultListActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultList)
