import React, { useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import Title from './Title'
import QuantityBtn from './QuantityBtn'
import { useEffect } from 'react'
import styles from './ProductDetail.module.css'

export default function ProductDetail() {

    let params = useParams()
    let [productDetail,setProductDetail] = useState(null)

    useEffect(()=>{
        let productlist =[
            {"id" : 1, "name": "Basketball", "price": 1000 , "image" : "basketball.jpg", "description" : "XXXXX"},
            {"id" : 2, "name": "Batminton", "price": 2000 , "image" : "batminton.jpg", "description" : "XXXXX"},
            {"id" : 3,"name" : "Table tennis", "price" : 1500, "image" : "Table tennis.jpg","description":"XXXXX"},
            {"id" : 4,"name" : "soccer", "price" : 2500,"image" : "soccer.jpg","description":"XXXXX"},
            {"id" : 5,"name" : "golf", "price" : 800,"image" : "golf.jpg","description":"XXXXX"},
            {"id" : 6,"name" : "handball", "price" : 1000,"image" : "handball.jpg","description":"XXXXX"}
        ]

        let productInfo = productlist.find((element)=>{
            return element.id === parseInt(params.id)
        })
        setProductDetail(productInfo)
    },[])

    return (
        <div>
            {
                productDetail &&
                <div>
                    <Title mainTitle ={productDetail.name + " ProductDetail"}/>

                    <div className={styles.productdetail}>
                        <img src={process.env.PUBLIC_URL+'/img/'+ productDetail.image} width="400"  />
                        <p>{productDetail.name}</p>
                        <p>{productDetail.price}</p>
                        <p>{productDetail.description}</p>
                        <QuantityBtn productInfo={productDetail}/>
                    </div>
                </div>
            }

            <Link className={styles.HomeBtn} to='/'> Back to Home Page</Link>
        </div>
    )
}
