import React from 'react'
import ReactDOM from 'react-dom'
import Functionalities from './components/Functionalities'
import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function App(){
    return(
        <div className="align-items-center m-2">
            <Functionalities></Functionalities>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)