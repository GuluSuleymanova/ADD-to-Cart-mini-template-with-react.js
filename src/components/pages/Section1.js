import React from 'react'
import Product from './Product'
import Sec1_navitem from './Sec1_navitem'

const Section1 = () => {
  return (
    <div className='sec1'>
        <div className="container">
            <div className="row d-flex justify-content-center">
                {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12"> */}
                    <div className="basliq">
                    <h1 className='fresh'>Fresh & Clean</h1></div>
                    <div className="navlist">
                    <Sec1_navitem h5="New in" icons='fas fa-search' />
                    <Sec1_navitem h5="Butcher" icons='fas fa-search' />
                    <Sec1_navitem h5="Dairy" icons="fa-solid fa-cheese" />
                    <Sec1_navitem h5="Fruits & Veg" icons="fa-solid fa-leaf" />
                    <Sec1_navitem h5="Bakery" icons='fas fa-search' />
    
                    {/* </div> */}
                    </div>
                    

                    <Product/>
                </div>

            </div>

        </div>
        
    
  )
}

export default Section1