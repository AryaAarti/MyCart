import React from 'react';
import CartItem from './CartItem';
import Navbar from './Navbar';
class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[
           { price:98900,
             title:'Washing Machine',
             qty:1,
             img:'',
             id:1
            },
            {   price:19890,
                title:'Phone',
                qty:1,
                img:'',
                id:2
            },
            {   price:10890,
                title:'LED',
                qty:1,
                img:'',
                id:3
            }
        ]
    }
}
handleInc =(product)=>{
    const{products}=this.state
    const index= products.indexOf(product)
    products[index].qty+=1
    this.setState({
        products
    })
}
handleDec =(product)=>{
    const{products}=this.state
    const index= products.indexOf(product)
    if(products[index].qty>0)
    {products[index].qty-=1
    this.setState({
        products
    })}
}
handleDel=(id)=>{
    const{products}=this.state
    const items= products.filter((item)=>id!==item.id)
    this.setState({
        products:items
    })
}
getCount=()=>{
    const {products}=this.state
    let count=0
    products.forEach((item)=>{
        count+=item.qty;
    })
    return count;
}
getPrice=()=>{
    const {products}=this.state
    let total=0
    products.forEach((item)=>{
        total+=item.qty*item.price;
    })
    return total;
}
render(){
  const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCount()}/>
      <CartItem product={products} 
                   incQty={this.handleInc}
                   deQty={this.handleDec}
                   delQty={this.handleDel}/>
        <div>Total: {this.getPrice()}</div>
    </div>
  );
}
}

export default App;
