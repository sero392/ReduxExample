import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Badge, Table, Button } from 'reactstrap'
import * as cartActions from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'

class CartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " sepetten silindi..")
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Ürün Adı
                            </th>
                            <th>
                                Birim Fiyat
                            </th>
                            <th>
                                Stok Adedi
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {

                            this.props.cart.map(cartItem =>
                            (

                                <tr key={cartItem.product.productId}>
                                    <th scope="row">
                                        {cartItem.product.productId}
                                    </th>
                                    <td>
                                        {cartItem.product.productName}
                                    </td>
                                    <td>
                                        <Badge pill
                                            color="primary">
                                            {cartItem.product.unitPrice}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Badge pill
                                            color="primary">
                                            {cartItem.quantity}
                                        </Badge>
                                    </td>

                                    <td>
                                        <Button outline
                                            color='danger'
                                            size="sm"
                                            onClick={() => this.removeFromCart(cartItem.product)}>
                                            Sil
                                        </Button>
                                    </td>
                                </tr>

                            )
                            )
                        }

                    </tbody>
                </Table>
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
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)