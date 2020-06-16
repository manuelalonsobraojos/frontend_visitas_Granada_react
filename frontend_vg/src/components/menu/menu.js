import React, { Component } from 'react';

class Menu extends React.Component {
 
    render() {
   
    return (   
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">Visitas Granada</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                        <a class="nav-link" href="">Inicio
                            <span class="sr-only">(current)</span>
                        </a>
                        </li>
                        <li class="nav-item">
                            <a id="LighMode" class="nav-link"><i class="fa fa-moon-o" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>   
    )      
    }   
  }
   
  export default Menu;