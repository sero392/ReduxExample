import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import * as productActions from '../../redux/actions/productActions'
import { ListGroup, ListGroupItem } from 'reactstrap'

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }
     cmdChangeCategory(category) {
        this.props.actions.changeCategory(category);
        this.props.actions.getProducts(category.id);
    }
    render() {
     
        return (
            
            <div>
                <h4>
                    Kategoriler
                </h4>
                <ListGroup>
                    {
                        this.props.categoryList.map(category => (
                            <ListGroupItem active={category.id === this.props.currentCategory.id} key={category.id} onClick={() => this.cmdChangeCategory(category)}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                {/* <div  className='mt-4'>
                    <span>Seçili Kategori : </span>
                    <span className='text-success'>
                        {this.props.currentCategory.categoryName}
                    </span>
                </div> */}


            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categoryList: state.categoryListReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
