import React from 'react';
import { useCart } from 'react-use-cart';
import basket from '../../assets/img/basket.png';



const Basket = () => {
const{isEmpty,
totalUniqueItems,
totalItems,
items,
updateItemQuantity,
cartTotal,
removeItem,
emptyCart
}= useCart();

if (isEmpty) return <div className="text-center d-flex align-items-center justify-content-center">
<img src={basket} width="50%" height="auto" alt="" />
</div>

return (
<section>
<div className="container">
<div className="row">

<div className="subheader mb-5 mt-5 text-center">
<h4 >
<span className="title-part active">Cart</span>
<span className="icon"> {'>'} </span>
<span className="title-part"><a href="">Checkout</a></span>
<span className="icon">{'>'}</span>
<span className="title-part">Order Complete</span>
</h4>
</div>


<div className="col-lg-8 mt-5 ">
<h4 className='pb-3'>Your Cart({totalItems} items)</h4>

<table className='table'>
<tbody>
{items.map((item,index)=>{
return(
<tr key={index}>

<td>
<img src={item.img} width="80" alt="" />
</td>

<td>
{item.title}
</td>

<td>
<div className="input-group">
<button className='input-group-text'
onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
<div className="form-control text-center">{item.quantity}</div>
<button className='input-group-text'
onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
</div>
</td>

<td>
${item.price}
</td>

<td>
<button onClick={()=>{removeItem(item.id)}}><i className="fa-solid fa-trash"></i></button>
</td>

</tr>
)
})}
</tbody>
</table>

</div>

<div className="col-lg-4 mt-5" style={{backgroundColor: "white", height:"300px"}}>
    <h3 className='pt-3 pb-3'>Cart totals</h3>
    <div className="d-flex mx-3 ">
    Subtotal<span className='ms-auto'>{totalUniqueItems}</span></div>
    <hr />
    <div className="d-flex mx-3 ">
    Total Items<span className='ms-auto'>{totalItems}</span></div>
    <hr />
    <div className="d-flex mx-3 ">
    <h3>Total</h3><span className='ms-auto'>& {cartTotal}</span></div>

    <button onClick={()=>emptyCart()} className="btn"
     style={{backgroundColor:"#39524f", 
     width:"100%",
      color:"wheat",
      textTransform:"uppercase", 
      fontSize:"20px",
    fontWeight:"600"}}>Empty Cart</button>
</div>


</div>
</div>
</section>

)
}

export default Basket