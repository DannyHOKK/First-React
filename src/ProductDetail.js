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
            {"id" : 1, "name": "三上攸亞", "price": 1000 , "image" : "yau.jpg", "description" : "XXXXX"},
            {"id" : 2, "name": "橋本有菜", "price": 2000 , "image" : "kiu.jpg", "description" : "XXXXX"},
            {"id" : 3,"name" : "波多野結衣", "price" : 1500, "image" : "ball.jpg","description":"XXXXX"},
            {"id" : 4,"name" : "明日花綺羅", "price" : 2500,"image" : "flower.jpg","description":"XXXXX"},
            {"id" : 5,"name" : "深田詠美", "price" : 800,"image" : "tin.jpg","description":"XXXXX"},
            {"id" : 6,"name" : "小島南", "price" : 1000,"image" : "small.jpg","description":"XXXXX"}
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
