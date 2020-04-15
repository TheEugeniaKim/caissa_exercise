import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import Header from './components/Header'
import AppContainer from './components/AppContainer'
import {Container, Row, Col} from 'react-bootstrap'

class App extends React.Component {

  render(){
    return (
      <Container fluid>
        <Row>
          <Col>
            <br/>
            <Header />
              <br/>
              <br/>
          <AppContainer />
          </Col>
        </Row>
      </Container>
    )
  }
}

const connectedApp = connect(null,null)(App)

export default connectedApp;
