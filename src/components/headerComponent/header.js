import React from 'react';
import './header.css';

function HeaderComponent(){
    return(
        <>
          <header className='shadow py-2 rounded header'>
              <div className='container py-2'>
                  <div className='d-flex justify-content-between'>
                      <h1 className='fs-2'>Company name</h1>
                      <ul className='d-flex justify-content-between align-items-center header--navbar'>
                          <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Featuries</a></li>
                          <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Enterprise</a></li>
                          <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Support</a></li>
                          <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/' className='btn btn-outline-primary'>Sing up</a></li>
                      </ul>
                  </div>
              </div>
          </header>
        </>
    )
}

export default HeaderComponent;