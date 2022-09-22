import React from 'react'
import Productitem from './Productitem'
import data11 from '../data/data1'


   

const Product = () => {
  return (
    <div className="row p-3">
        
        {data11.productData.map((item,index)=>{
         return(
         <Productitem 
        sekil={item.img}
        aciqlama={item.title} 
        qiymet={item.price}
        item={item} 
        key={index}
        />
        )
        })}

   </div>
    
  )
}

export default Product