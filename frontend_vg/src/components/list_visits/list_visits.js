import React, { Component } from 'react';
import VisitRow from '../visit-row/visit-row'


class ListVisits extends React.Component {
 
    
    
    

    render() {
        
    return (   
        <div class="col-lg-8 col-md-8 col-xs-12">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-xs-12">
                <h3>Actividades en Granada</h3>
            </div>
          {
            this.props.listado.map((visit) => {
              return <VisitRow id={ visit.id }
                                name={ visit.nombre }
                                picture={ visit.foto }
                                likes={ visit.likes }
                                description={ visit.descripcion } />
            })
          }
      </div>
      </div>
    )      
    }   
  }
   
  export default ListVisits;