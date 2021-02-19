import React from 'react';
import ProductList from './components/ProductList';
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

  render() {
    return(
      <div className="App">
            <header className="App-header">
            
            <a href="/">Shopping Cart</a>
             </header>
            <main>
              <div className="content">
              <div className="main">
                <ProductList products={data.products}></ProductList>
              </div>
              <div className="sidebar">side bar</div>
              </div></main>
             <footer>footer</footer>
           </div>
    )
  }
}

export default App;
