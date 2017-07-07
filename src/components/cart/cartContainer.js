import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Cart from './cart'
import * as cartActions from '../../actions/cart';

function mapStateToProps(state, prop) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
