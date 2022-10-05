import React from 'react'
import styles from './ProductList.module.css'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Title from './Title'
import QuantityBtn from './QuantityBtn'

export default function ProductList() {

    let productlist =[
        {"id" : 1, "name": "三上攸亞", "price": 1000 , "image" : "yau.jpg", "description" : "XXXXX"},
        {"id" : 2, "name": "橋本有菜", "price": 2000 , "image" : "kiu.jpg", "description" : "XXXXX"},
        {"id" : 3,"name" : "波多野結衣", "price" : 1500, "image" : "ball.jpg","description":"XXXXX"},
        {"id" : 4,"name" : "明日花綺羅", "price" : 2500,"image" : "flower.jpg","description":"XXXXX"},
        {"id" : 5,"name" : "深田詠美", "price" : 800,"image" : "tin.jpg","description":"XXXXX"},
        {"id" : 6,"name" : "小島南", "price" : 1000,"image" : "small.jpg","description":"XXXXX"}
    ]


    
    // let [productlist, setProductList] = useState([])

    // useEffect(()=>{
    //     //1 : 冇左第二參數: Component each render 都會Trigger
    //     //2 : Dependency Array 是空array 時 : 只會在第一次web render時Trigger
        
    //     fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
    //         .then(response => response.json())
    //         .then(data => setProductList(data))

    //     console.log(productlist)
    // },[]) //<==  Dependency Array

return(
    //REACT FRAGMENT
    <>
        <Title mainTitle="Select Your Pornstar!"/>

        <div className={styles.showproduct}>
            {
                productlist.map(product=>(
                    <div className={styles.productBorder} key={product.id}>
                        <h1>{product.name}</h1>
                        <p>Price: {product.price}</p>
                        <Link to={'/product/ '+ product.id}>
                        <img src={process.env.PUBLIC_URL+'/img/'+ product.image} width='500' height="550" /><br/>
                        </Link>
                        <p>{product.description}</p>
                        <QuantityBtn productInfo={product} />
                    </div>
                    ))
            }            
        </div>
    </>
  )
}
