import React from 'react'

const Sec1_navitem = (props) => {
  return (
        <div className="nav-item">
        <div className="icon-nav"><a href=""><i className={props.icons} ></i></a></div>
        <a className="h5-info " href=""><h5>{props.h5}</h5></a>
        </div>
   
  )
}

export default Sec1_navitem
