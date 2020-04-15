import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {toggleModal} from '../redux/actions'
import SecuritiesContainer from './SecuritiesContainer'
import {Container, Row, Col} from 'react-bootstrap'
import ModalComponent from '../components/ModalComponent'

class AppContainer extends React.Component{

  render(){
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col>
            <h2>Securities</h2>
            <br/>
            <SecuritiesContainer />
            <br/>

            <ModalComponent 
              show={this.props.showModal}
              onHide={this.props.toggleModal}

            /> 
            <br/>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state){
  return {
    securities: state.reducer.securities,
    showModal: state.UIreducer.showModal,
    showAddSecurityModal: state.UIreducer.showAddSecurityModal
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    toggleModal
  }, dispatch)
}

const connectedAppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer)

export default connectedAppContainer