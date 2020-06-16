import React, { Component } from 'react';
import './footer.css';

class Footer extends React.Component {
 
    render() {
        let style = {
            left: 0,
            bottom: 0,
            width: '100%'

    };
    return (   
        <footer style={style} class="py-5 bg-dark">
            <div class="container">
                <p class="m-0 text-center text-white">Copyright &copy; Visitas Granada 2020</p>
            </div>
        </footer>  
    )      
    }   
  }
   
  export default Footer;