import React from 'react'

class VisitRow extends React.Component {

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
                    <a href="">{this.props.name}</a>
                    </h4>
                    <h5>
                    <label id="NumberLikes-{{visit.id}}">{this.props.likes}</label> Likes
                    <a class="ButtonIncrementLikes" data-id-visit="this.props.id"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></a>
                    <a class="ButtonDecrementLikes" data-id-visit="this.props.id"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></a>
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