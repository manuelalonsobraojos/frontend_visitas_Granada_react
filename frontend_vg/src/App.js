import React, { Component } from 'react';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import ListVisits from './components/list_visits/list_visits';
import Visit from './components/visit/visit'
import { BrowserRouter as Router, Route, Link, BrowserRouter, Switch } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { visits: [] }
  }

  componentWillMount() {
    fetch('http://localhost:8000/visitas_granada/api/visitas')
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
      marginTop:'10%',
      display:'flex',
      justifyContent:'center'
    };
    if (this.state.visits.length > 0) {
      return (
        
        <body>
          <Menu />
          <div style={Container} class="container">
          
            <Router>
              <Switch>
                <Route path="/" exact>
                  <ListVisits listado={this.state.visits} />
                </Route>
                <Route path="/visit/:id" exact component={Visit} >
                </Route>
              </Switch>
            </Router>
        
          </div>
        <Footer />
        </body>
      )
    } else {
      return <p className="text-center">Cargando visitas...</p>
    }
  }
}


export default App;
