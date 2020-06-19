import React, { Component } from 'react';

class Visit extends React.Component {
 
    constructor(props) {
        super(props)
        this.state = { visit: {} }
    } 
    
    incrementLike(){

        fetch('http://localhost:8000/visitas_granada/api/visitas/likes/' + this.state.visit.id  + '/', {
        method: 'PUT',
        body: JSON.stringify({
            "id": this.state.visit.id,
            "likes": this.state.visit.likes +1 
        }),
        headers: {
            'Content-Type': 'application/json'
        }
        }).then(function (response) {
            console.log(response)
          });

        this.componentWillMount();
        this.render();
    }

    decrementLike(){

        fetch('http://localhost:8000/visitas_granada/api/visitas/likes/' + this.state.visit.id  + '/', {
        method: 'PUT',
        body: JSON.stringify({
            "id": this.state.visit.id,
            "likes": this.state.visit.likes - 1 
        }),
        headers: {
            'Content-Type': 'application/json'
        }
        }).then(function (response) {
            console.log(response)
          });

        this.componentWillMount();
        this.render();

        
    }

    componentWillMount() {
        fetch('http://localhost:8000/visitas_granada/api/visitas/' + this.props.match.params.id + '/')
          .then((response) => {
            return response.json()
          })
          .then((data) => {
              console.log(data);
            this.setState({ visit: data })
        })
      }

    render() {
        
    return (  
        <div> 
            <div class="row">
                <div id="ContainerImgVisit" class="col-lg-12 col-md-12 col-xs-12">
                    <img class="card-img-top" src={this.state.visit.foto} alt=""/>
                </div>
            </div>
    
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xs-12">
                <h1 class="my-4">Descripción:</h1>
                <p>{this.state.visit.descripcion}</p>

                <h5>
                    <label id="NumberLikes-{{visit.id}}">{this.state.visit.likes}</label> Likes
                    <a class="btn ButtonIncrementLikes" data-id-visit="this.props.id" onClick={this.incrementLike.bind(this)}><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></a>
                    <a class="btn ButtonDecrementLikes" data-id-visit="this.props.id" onClick={this.decrementLike.bind(this)}><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></a>
                </h5>
                </div>
            </div>
        </div>
    )      
    }   
}
   
  export default Visit;