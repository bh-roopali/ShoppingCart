import {React, Component  } from "react";
import Formatecurrency  from "../util";
import Fade from "react-reveal/Fade";

export default class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout : false
        }
    }

    handleInput = (e) => {
    this.setState({ [e.target.name] : e.target.value} )
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            addToCart: this.state.address,
            items: this.props.cartItems
        }

        this.props.createOrder(order);
    }
   
    render(){
        const {cartItems} = this.props;
        return(
            <div>
            <div>
           {cartItems.length === 0 ? <div className="cart cart-header">Cart is empty</div> : <div className="cart cart-header">You have {cartItems.length} items</div>}
           </div>
            <div className="cart">
                <Fade left cascade>
                 <ul className="cart-items"> 
               {cartItems.map(item => (
                   <li key={item._id}>
                       <div>
                       <img src={item.image} alt="" className={cartItems.title}></img>
                       </div>
                       <div>
                    {item.title}
                    <div className="right">
                        {Formatecurrency(item.price)}x{item.count}{" "}
                     <button  onClick={() => this.props.removeFromCart(item)}>Remove</button>
                     </div>
                       </div>
                       
                   </li>
               ))} 
                </ul> 
                </Fade>
            </div>
            
            {cartItems.length !==0 &&(
                    <div className="cart">
                    <div className="total">
                        <div>
                            Total:{" "}
                            {Formatecurrency(cartItems.reduce((a,c) => a + c.price * c.count ,0))}
                        </div>
                        <button onClick={() => this.setState({showCheckout: true})} className="button primary">Proceed</button>
                    </div>
                </div>
               
            )}
             {this.state.showCheckout && (

              <div className="cart">
                  <Fade right cascade>
                  <form onSubmit={this.createOrder}>
                      <ul className="form-container">
                          <li>
                              <label>Email</label>
                              <input name="email" type="email" required onChange={this.handleInput}></input>
                          </li>
                          <li>
                              <label>Name</label>
                              <input name="name" type="text" required onChange={this.handleInput}></input>
                          </li>
                          <li>
                              <label>Address</label>
                              <input name="address" type="address" required onChange={this.handleInput}></input>
                          </li>
                          <li>
                               <li>
<button type="submit" className="button primary">Checkout</button>
                          </li>
                          </li>
                      </ul>
                  </form>
                  </Fade>

              </div>
                )}
        
            </div>
        )
    }
}