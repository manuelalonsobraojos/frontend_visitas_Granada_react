import React, { Component } from 'react';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import ListVisits from './components/list_visits/list_visits';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { visits: [] }
  }

  componentWillMount() {
    fetch('http://localhost:8000/visitas_granada/apivisitas/visitas')
      .then((response) => {
        return response.json()
      })
      .then((visits) => {
        this.setState({ visits: visits })
    })
  }

  render() {
    let Container={
      marginBottom:'10%',
      marginTop:'10%'
    };
    if (this.state.visits.length > 0) {
      return (
        <body>
        <Menu />
        <div style={Container} class="container">
          <div class="row">
            <div class="col-lg-4">
              <h1 class="my-4">Categorías</h1>
              <div class="list-group">
                <a href="#" class="list-group-item">Category 1</a>
                <a href="#" class="list-group-item">Category 2</a>
                <a href="#" class="list-group-item">Category 3</a>
              </div>
            </div>
            <ListVisits listado={this.state.visits} />
          </div>
        </div>
        <Footer />
        </body>
      )
    } else {
      return <p className="text-center">Cargando empleados...</p>
    }
  }
}


export default App;
