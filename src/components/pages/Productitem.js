import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'

const Productitem = (props) => {
  const {addItem}=useCart();
  return (
    <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12'>
        <div className="card">
        <div className="image">
        <img src={props.sekil} className="card-img-top" alt="..." />
        <div className="close-add">
        <a onClick={()=>addItem(props.item)} className="btn btn-primary">Add to cart</a>
        </div>
        </div>
        <div className="card-body"> 
          <h5 className="card-title">{props.aciqlama}</h5>
          <p className="card-text">${props.qiymet}</p>
          {/* <Link className="btn btn-outline-success" to="/blog">Read more</Link> */}

          
        </div>
      </div>
    </div>
  )
}

export default Productitem