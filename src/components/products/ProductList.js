import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Badge, Table, Button } from 'reactstrap'
import * as productActions from '../../redux/actions/productActions'
import * as cartActions from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'
import { Link } from 'react-router-dom'

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = (product) => {
this.props.actions.addToCart({quantity:1,product});
alertify.success(product.productName + " sepete eklendi")
  }
  render() {
    return (
      <div>
        <h4>
          Ürünler
        </h4>
        <Badge className='ms-2' color="success">
          {this.props.currentCategory.categoryName}
        </Badge>
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

              this.props.products.map(element =>
              (

                <tr key={element.productId}>
                  <th scope="row">
                    {element.productId}
                  </th>
                  <td>
                    <Link to={"/saveproduct/" + element.id}>
                    {element.productName}
                    </Link>
                  </td>
                  <td>
                    <Badge pill
                      color="primary">
                      {element.unitPrice}
                    </Badge>
                  </td>
                  <td>
                    {element.unitsInStock}
                  </td>

                  <td>
                    <Button color='success' onClick={() => this.addToCart(element)}>
                      Ekle
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
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)