import React from 'react';
import ProductList from './components/ProductList';
import Filter from './components/Filter'
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
      size: '',
      sort: ''
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
                <ProductList products={this.state.products}></ProductList>
              </div>
              <div className="sidebar">side bar</div>
              </div></main>
             <footer>footer</footer>
           </div>
    )
  }
}

export default App;
