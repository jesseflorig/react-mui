import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import Navbar from './navbar'
import * as navbarActions from '../../actions/navbar'

function mapStateToProps(state) {
  return {
    navbar: state.navbar
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(navbarActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
