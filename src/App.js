import React from 'react';
import ProductList from './components/ProductList';
import Filter from './components/Filter'
import Cart from "./components/Cart";
import data from './data.json'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
      
//       <a href="/">Shopping Cart</a>
//       </header>
//       <main>main contebt</main>
//       <footer>footer</footer>
//     </div>
//   );
// }

class App extends React.Component {

  constructor() {
    super();

    this.state={
      products: data.products,
      cartItems: [],
      size: '',
      sort: '',
      count: 0
    };
  }
  filterPoducts = (event) => {
const sizevalue = event.target.value;
if(sizevalue === "") {
  this.setState({
    size: sizevalue,
    products: data.products
  })
} else{
this.setState({
  size: sizevalue,
  products: data.products.filter(product => product.availableSize.indexOf(sizevalue)>=0)
})
}
  }

  sortProducts = (event) =>  {
    const sortvalue = event.target.value;
    this.setState({
      sort: sortvalue,
      products: this.state.products.slice().sort((a,b) => (
        sortvalue === 'lowest' ? 
        ((a.price > b.price) ? 1 : -1) :
         sortvalue === 'highest' ? 
         ((a.price < b.price) ? 1 : -1) :
         ((a._id < b._id) ? 1 : -1)
      )
      )
    })
  }

  addToCart = (product) => {
  let alreadyInCart = false;
  let cartItems = this.state.cartItems.slice();
  cartItems.forEach(item => {
    if(item._id === product._id){
    alreadyInCart = true;
    item.count++;
  }
  })
  if(!alreadyInCart){
    cartItems.push({...product, count: 1})
  }
  this.setState({cartItems})
  }

  removeFromCart = (item) => {
    let cartItems = this.state.cartItems.slice();
   cartItems = cartItems.filter(cartitem =>  cartitem._id !== item._id)
   this.setState({cartItems})
  }

  render() {
    return(
      <div className="App">
            <header className="App-header">
            
            <a href="/">Shopping Cart</a>
             </header>
            <main>
              <div className="content">
              <div className="main">
                <Filter count={this.state.products.length} size={this.state.size} sort={this.state.sort} sortProducts={this.sortProducts} filterPoducts={this.filterPoducts}></Filter>
                <ProductList products={this.state.products} addToCart={this.addToCart}></ProductList>
              </div>
              <div className="sidebar">
                <Cart  cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}></Cart>
              </div>
              </div></main>
             <footer>footer</footer>
           </div>
    )
  }
}

export default App;
