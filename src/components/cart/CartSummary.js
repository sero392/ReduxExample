import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavItem,
    NavLink,
    Badge,

} from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions'
import { Link } from 'react-router-dom';

class CartSummary extends Component {

    renderEmpty() {
        return (
            <NavItem>
                <NavLink>
                    Sepetiniz Boş
                </NavLink>
            </NavItem>

        )
    }
    renderSummary() {
        console.log(this.props.actions)
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Sepet
                </DropdownToggle>
                <DropdownMenu end>
                    {


                        this.props.cart.map((m) => (
                            <DropdownItem key={m.product.productId}>
                                <span>
                                    {m.product.productName}
                                </span>
                                <Badge>
                                    {m.quantity}

                                </Badge>

                                <Badge color='danger' className='ms-3' onClick={() => this.props.actions.removeFromCart(m.product)}>X</Badge>

                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to="cart">
                        Sepete Git
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>

        )
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }

            </div>

        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)