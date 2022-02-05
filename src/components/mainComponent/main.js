import React from 'react';
import './main.css';

 function MainComponent(){
     return(
         <>
           <section className='main--section'>
       <div className='container main--div'>
           <h2>Pricing</h2>
           <p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
       </div>
  
        <div className='d-flex main--flex justify-content-between'>

            <div className='card'>
               <h3>Free</h3>
               <h4>$0 <span>/ mo</span></h4>
               <p>10 users included</p>
               <p>2 GB of storage</p>
               <p>Email support</p>
               <p>Help center access</p>

            <button className='btn btn-outline-primary'>Sing up for free</button>
            </div>
            
            <div className='card'>
               <h3>Pro</h3>
               <h4>$15 <span>/ mo</span></h4>
               <p>20 users included</p>
               <p>10 GB of storage</p>
               <p>Email support</p>
               <p>Help center access</p>

            <button className='btn btn-primary'>Get started</button>
            </div>

            <div className='card'>
               <h3>Enterprise</h3>
               <h4>$29 <span>/ mo</span></h4>
               <p>30 users included</p>
               <p>15 GB of storage</p>
               <p>Email support</p>
               <p>Help center access</p>

            <button className='btn btn-primary'>Contact us</button>
            </div>

        </div>


 <footer className='footer'>
     <div className='d-flex justify-content-between footer--div'>
    <ul>
        <li><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"></img></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>&copy; 2017-2019</a></li>
    </ul>

    <ul>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'><strong>Features</strong></a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Cool stuff</a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Random features</a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Team features</a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Stuff for developers</a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Another one</a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Last time</a></li>
    </ul>

    <ul>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'><strong>Resources</strong></a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Resource</a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Resource name</a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Another resource</a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Final resourse</a></li>
    </ul>

    <ul>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'><strong>About</strong></a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Team</a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Location</a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Privacy</a></li>
        <li><a href='https://getbootstrap.com/docs/4.0/examples/pricing/'>Terms</a></li>

    </ul>
     </div>
 </footer>
           </section>
         </>
     )
 }

export default MainComponent;