import React from 'react'
import ReactDOM from 'react-dom'
import Functionalities from './components/Functionalities'
import Search from './components/Search'

export default function App(){
    return(
        <div className="align-items-center m-2">
            <Functionalities></Functionalities>
            <Search></Search>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)