import React from 'react';
import Cart from './Cart';
const CartItem=(props)=>{

        const {product}=props;
        return(
            <div>
               {product.map((produc)=>{
                   return(<Cart product={produc} key={produc.id}
                   incQty={props.incQty}
                   deQty={props.deQty}
                   delQty={props.delQty}/>)
               })}
            </div>
        )
}

export default CartItem;