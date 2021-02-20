import React from "react";
import Formatecurrency from '../util'

class ProductList extends React.Component {
constructor(props){
    super(props);

}

render() {
    return(
<div>
  <ul className="products">
  {this.props.products.map(product => 
    <li key={product._id}>
        <div className="product">
            <a href={"#" + product._id}>
                <img src={product.image} alt="Product image"></img>
                <p>{product.title}</p>
            </a>
            <div>
           <div style={{'font-size': 'initial'}}>{Formatecurrency(product.price)}</div>
           <button className="button primary">Add to Cart</button>
            </div>
        </div>
    </li>)}
      </ul>  
</div>
    )
}
}

export default ProductList;