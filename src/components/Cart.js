import {React, Component  } from "react";
import Formatecurrency  from "../util";

export default class Cart extends Component {
   
    render(){
        const {cartItems} = this.props;
        return(
            <div>
            <div>
           {cartItems === 0 ? <div className="cart cart-header">Cart is empty</div> : <div className="cart cart-header">You have {cartItems.length} items</div>}
           </div>
            <div className="cart">
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
            </div>
            
            {cartItems.length !==0 &&(
                    <div className="cart">
                    <div className="total">
                        <div>
                            Total:{" "}
                            {Formatecurrency(cartItems.reduce((a,c) => a + c.price * c.count ,0))}
                        </div>
                        <button className="button primary">Proceed</button>
                    </div>
                </div>
            )}
        
            </div>
        )
    }
}