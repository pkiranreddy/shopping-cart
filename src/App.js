import React from 'react';
import './App.css'
import Productlist from './components/productlist'
import Filter from './components/filter'
import Basket from './components/Basket'


class App extends React.Component {
 state={
   sort : '',
   size : '',
   cartitems : [],
   products : [],
   filteredproducts : []
 }

 componentDidMount(){
   fetch('http://localhost:8000/products')
   .then(res =>res.json())
   .then((data)=>{
     this.setState({
       products : data,
       filteredproducts :data
     })
   });
 }

 handlechangesort=(e)=>{
    this.setState({sort : e.target.value});
    this.listproducts();
 }

handlechangesize=(e)=>{
  this.setState({size : e.target.value})
  this.listproducts()
}

handleaddtocart = (e, product) => {
  this.setState(state => {
    const cartItems = state.cartitems;
    let productAlreadyInCart = false;

    cartItems.forEach(cp => {
      if (cp.id === product.id) {
        cp.count += 1;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    
    return { cartItems: cartItems };
  });
};

handleremovecart=(e,product)=>{
  this.setState(prev=>{
    return{
      cartitems :   prev.cartitems.filter(p=> p.id !== product.id)
    }
      
  })
}


listproducts=()=>{
 this.setState(prev=>{
   if(prev.sort !== ''){
     prev.sort === 'lowest' ? prev.products.sort((a,b)=>a.price-b.price) : prev.products.sort((a,b)=>b.price-a.price)
   }
   else{
     prev.products.sort((a,b)=>a.id-b.id)
   }
   
 
   if(prev.size !== ''){
     return {
      filteredproducts : prev.products.filter(p=> p.availableSizes.indexOf(prev.size) !== -1)
   }}
   return{
    filteredproducts : prev.products
  }

 })
}




  render(){

    return (
      <div className="container">
          <h1>E-Commerce shopping cart</h1>
          <hr/>
          
          <div className='row'>
            <div className="col-8">
                 <Filter 
                  products={this.state.filteredproducts}
                  handlechangesort={this.handlechangesort} 
                  sort={this.state.sort}
                  size={this.state.size}
                  handlechangesize={this.handlechangesize}
                  /><hr/>
                 
                 <Productlist products={this.state.filteredproducts} handleaddtocart={this.handleaddtocart}/> <hr/>
            </div>
              
              <div className='col-4'>
              <Basket cartitems={this.state.cartitems} handleremovecart={this.handleremovecart}/>
              </div>
          </div>
      </div>
    );
  }
  }
  

export default App;
