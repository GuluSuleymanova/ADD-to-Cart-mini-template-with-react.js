import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import Basket from '../components/pages/Basket'
import Header from '../components/pages/Header'
import Section1 from '../components/pages/Section1'


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Switch>
        <CartProvider>
            <Header/>
            
            <Route exact path="/" component={Section1}></Route>
            <Route  path="/basket" component={Basket}></Route>
            
           
            
        </CartProvider>
    </Switch>
    </BrowserRouter>
  )
}

export default AppRouter