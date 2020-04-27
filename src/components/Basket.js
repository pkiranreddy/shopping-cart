import React, { Component } from 'react';

export default class Basket extends Component {
    render() {
        const cartitems  = this.props.cartitems;

        return(
            
           <div className=" card " >
                {cartitems.length === 0
                    ? <b>Basket is empty :</b>
                    :
                    <div className="card-body">You have {cartitems.length} items in the basket. </div> 
                }<hr/>
                {
                    cartitems.length >0  ?
                    
                    <ul className="card-body" style={{listStyle : 'none', marginLeft : '2px'}}>
                        
                        { 
                           cartitems.map(product=>{
                               return(
                                <div> 
                                    <li  style={{ marginLeft: -20 }} >{product.title} 
                                    {product.price} X {product.count/2}
                                    <button 
                                      className="btn btn-danger"
                                      style={{float : 'right'}}
                                      onClick={(e)=>this.props.handleremovecart(e,product)} >
                                          X
                                       </button>
                                    </li>
                               </div>  
                               )
                           })
                        }
                    </ul>
                    : null
                   }<hr/>
             <p className='card-body'>  sum : 
                    {
                        cartitems.reduce((a,c)=> a + (c.count)/2 *c.price,0)
                    }
              </p>  
                    
            </div>
        )
    }
}
