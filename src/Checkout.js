import React, { useContext } from 'react'
import Title from './Title'
import {Link} from 'react-router-dom'
import QuantityBtn from './QuantityBtn'
import { CartContext } from './CartContext'
import styles from './Checkout.module.css'

export default function Checkout() {

    let {cartItems} = useContext(CartContext)
    let cartEmpty = cartItems.length <= 0 ? true : false

    let grandTotal = cartItems.reduce((total,product)=>{
        return total += product.price * product.quantity
    },0)

    const freeShippingPrice = 6000


    return (
        <div>
            <Title mainTitle ="Your Shopping Cart"/>
            
            {
                cartEmpty &&
                <div style={{marginTop: 30, fontSize:30}}>
                    <p style={{marginTop: 30, fontSize:30}}>Shopping Cart have no item</p><br/>
                    
                </div>
            }

            {
                !cartEmpty && 
                <div>
                    <div id="cartSection">
                        {
                            cartItems.map((product)=>(
                                <div className={styles.Checkout} key = {product.id}>
                                <img src={process.env.PUBLIC_URL+'/img/'+ product.image} width='300'/><br/>
                                    <p>{product.name}</p>
                                    <p>{product.description}</p>
                                    <p>{product.price}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <QuantityBtn productInfo={product}/>
                                </div>
                            ))
                        }
                    </div>
                    <div id="checkOutSection">
                        <div style={{margin:10, fontSize: 20}}>Total Price of items</div>
                        <div style={{margin:10, fontSize: 20}}>${grandTotal}</div>

                        {
                            grandTotal >= freeShippingPrice ?
                            <div style={{margin:30, fontSize: 20}}>Free Shipping</div> :
                            <div style={{margin:30, fontSize: 20}}>fulfill${freeShippingPrice} then Free Shipping<br/>
                            Still need ${freeShippingPrice - grandTotal}
                            </div>
                        }
                    </div>

                </div>
            }
        
        </div>

    )
}
