import React from 'react';
const Cart=(props)=>{
   
    // testing () {
    //     const promise=new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve("Done");
    //         },5000)
    //     })
    //     promise.then(()=>{
    //         this.setState({ qty: this.state.qty+1});
    //         this.setState({ qty: this.state.qty+1});
    //         this.setState({ qty: this.state.qty+1});
    //         console.log('states',this.state);
    //     });
    // }
    // incQty = () => {
    //     this.setState((prevState)=>{
    //         return{
    //             qty: prevState.qty+1
    //         }
    //     })
    // }
    // deQty=()=>{
    //     if(this.state.qty>0){
    //         this.setState((pre)=>{
    //             return{
    //                 qty:pre.qty-1
    //             }
    //         })
    //     }
    // }
    
        const {price,title,qty,id}=props.product;
        const{product,incQty,deQty,delQty}=props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#763'}}>Rs. {price}</div>
                    <div style={{color: '#779', fontFamily:'Consolas'}}>Qty :{qty}</div>
                    <div className="cart-Button">
                        <img alt="increase" className="action-icon" 
                        src="https://image.flaticon.com/icons/png/512/1237/1237946.png"
                        onClick={()=>{incQty(product)}}/>
                        <img alt ="decrease" className="action-icon" 
                        src="https://image.flaticon.com/icons/png/512/56/56889.png"
                        onClick={()=>deQty(product)}
                        />
                        <img alt="delete" className="action-icon" 
                        src="https://image.flaticon.com/icons/png/512/1214/1214926.png"
                        onClick={()=>delQty(id)}
                        />
                    </div>
                </div>
            </div>
        )
    }


const styles={
    image:{
        height:100,
        width:100,
        borderRadius:10,
        backgroundColor:'cyan'
    }
}

export default Cart;