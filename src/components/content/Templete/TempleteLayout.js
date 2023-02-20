import React from 'react'
import{Link} from 'react-router-dom'
import logo from '../logo/logo.jpg'
import './TempleteLayout.css'

function TempleteLayout() {
    function temp1(e){
        e.preventDefault();
        console.log('you clicked');
        
    }
 
      return (
        <div id="image">
            <p className='imgThumb'>
            <img src={logo} alt="" />
            <Link to="temp1">
            <span><button >Get Templete</button></span>
            </Link>
            </p>
            <p className='imgThumb'>
            <img src={logo} alt="" />
            <Link to="temp2">
            <span><button >Get Templete</button></span>
            </Link>
            </p>
            <p className='imgThumb'>
            <img src={logo} alt="" />
            <Link to="temp3">
            <span><button >Get Templete</button></span>
            </Link>
            </p>
            <p className='imgThumb'>
            <img src={logo} alt="" />
            <Link to="temp4">
            <span><button >Get Templete</button></span>
            </Link>
            </p>
        </div>
    
      )
   
}

export default TempleteLayout
