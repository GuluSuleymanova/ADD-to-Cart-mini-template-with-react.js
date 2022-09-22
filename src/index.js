import React from "react";
import ReactDOM  from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.css';
import AppRouter from "./routers/AppRouter";











const App=()=>{
    return(
        <div className="main-content">

            <AppRouter/>
            
        </div>
        
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));