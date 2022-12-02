import React from 'react';
import { useLocation } from 'react-router-dom'
import Header from '../component/Header';
import Footer from '../component/Footer';

const Body = (props) =>{
    const location = useLocation();
    console.log(location.pathname);

    return(
        <>
        <Header />
            {/* <h1>{props}jjj</h1> */}

       
            {location.pathname == '/' ?  <section className="banner">
                <div className="title">
                    <h2>Cheese Curds</h2>
                    <p>Yes, please.</p>
                </div>
            </section> : <section class="my-breadcrumb">
                <div class="container page-banner">
                    <div class="row">
                    <div class="col-sm-12 col-md-12 col-xs-12">
                        <ol class="breadcrumb">
                            <li><a href="3">Home</a></li>
                            <li class="active">Single Blog Posts</li>
                        </ol>
                    </div>
                    </div>
                </div>
            </section>}
           
            
            <section className="global-to-all">
            
                    {props.children}
               
            </section>

         <Footer />

        </>
    );
}
export default Body;