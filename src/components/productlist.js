import React, { Component } from 'react';

export default class Productlist extends Component {

    render() {
        return (
            <div className="row">
                {
                    this.props.products.map(product => (
                        <div className="col-md-4" key={product.id}>
                            <div className="text-center" style={{border : '1px solid gray',marginBottom : '4px', backgroundColor : 'white'}}>
                               
                                <a href={`#${product.id}`}>
                                    <img src={`${product.img}.jpg`} alt={product.title} />
                                    <p>{product.title}</p>                        
                                </a>
                               
                                <b>Available Sizes : {product.availableSizes.map(item =>`${item} ` )}</b> <br/>
                                
                                <b> Price : {`${product.price}$ `}</b><br/>
                                <b>id : {product.id}</b>  <br/>
                                <button className="btn btn-primary" onClick={(e)=>this.props.handleaddtocart(e,product)} >Add to cart</button>
                            
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}