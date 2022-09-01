import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Navigation extends Component {
    state = {  } 
    render() { 
        return (
            <div className='bg-success' style={{width: '5vw'}}>
                <a className='nav-link text-body' href='count'>Ran</a>
                <p className='nav-link text-body' >dom</p>
                <p className='nav-link text-body' >stuff</p>
            </div>
          );
    }
}
 
export default Navigation;