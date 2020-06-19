import React from 'react'
import { Router, Route, Link, BrowserRouter } from 'react-router-dom'
import Visit from '../visit/visit'

class VisitRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data_likes: {},
                        likes: 0,
                        id:0}
    }

    handleClick() {
        console.log('Se hizo click');
    }

    incrementLike(){

        fetch('http://localhost:8000/visitas_granada/api/visitas/likes/' + this.props.id  + '/', {
        method: 'PUT',
        body: JSON.stringify({
            "id": this.state.id,
            "likes": this.state.likes +1 
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

        fetch('http://localhost:8000/visitas_granada/api/visitas/likes/' + this.props.id  + '/', {
        method: 'PUT',
        body: JSON.stringify({
            "id": this.state.id,
            "likes": this.state.likes - 1 
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
        fetch('http://localhost:8000/visitas_granada/api/visitas/likes/' + this.props.id  + '/')
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            this.setState({ likes: data.likes, id:data.id })
        })
      }


    render() {
    let ContainerCard = {
        display: 'flex',
        flexWrap: 'wrap',
    };

    let visitContainer = {
        marginTop:'2%',
        marginBottom:'2%'
    };

    let visitImg = {
        marginTop:'2%'
    };

    return(
        <div style={visitContainer} id= "VisitContainer" class="card h-100">
            <div style={ContainerCard} id="container-card" class="col-lg-12 col-md-12 col-xs-12">

                <div style={visitImg} id="VisitImg" class="col-lg-4 col-md-4 col-xs-12">
                    <a href=""><img class="card-img-top" src={this.props.picture} alt=""/></a>
                </div>
                <div class="col-lg-8 col-md-8 col-xs-12">
                <div class="card-body">
                    <h4 class="card-title">
                    <a href={"/visit/"+this.props.id+"/"}>{this.props.name}</a>
                    </h4>
                    <h5>
                    <label id="NumberLikes-{{visit.id}}">{this.state.likes}</label> Likes
                    <a class="btn ButtonIncrementLikes" data-id-visit="this.props.id" onClick={this.incrementLike.bind(this)}><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></a>
                    <a class="btn ButtonDecrementLikes" data-id-visit="this.props.id" onClick={this.decrementLike.bind(this)}><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></a>
                    </h5>
                    <p class="card-text">{this.props.description}</p>
                </div>
                </div>
            </div>
        </div>
    )
  }
}

export default VisitRow