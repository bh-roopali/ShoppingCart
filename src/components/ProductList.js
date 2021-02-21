/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Formatecurrency from '../util'

class ProductList extends React.Component {
render() {
    return(
<div>
  <ul className="products">
  {this.props.products.map(product => 
    <li key={product._id}>
        <div className="product">
            <a href={"#" + product._id}>
                <img src={product.image}></img>
                <p>{product.title}</p>
            </a>
            <div>
           <div style={{'font-size': 'initial'}}>{Formatecurrency(product.price)}</div>
           <button className="button primary" onClick={() => this.props.addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    </li>)}
      </ul>  
</div>
    )
}
}

export default ProductList;