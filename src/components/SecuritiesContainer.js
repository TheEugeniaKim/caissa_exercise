import React from 'react'
import {connect} from 'react-redux'
import {showAddSecurity} from '../redux/actions'
import {Container, Col, Row, Card, Button} from 'react-bootstrap'
import Securities from './Securities'
import Prices from './Prices'


class SecuritiesContainer extends React.Component {

  handleClick(){
    return this.props.showAddSecurity()
  }

  render(){
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <Button 
                variant="primary" 
                style={{ width: '50%', align: 'left' }} 
                onClick={() => this.handleClick()}
              > Add Security </Button>
              <br/>
              <br/>
              <Securities />
            </div>
          </Col>
          <Col>
            <Card>
              {
                this.props.showPricesModal ? 
                <Prices /> : 
                null
              }
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}


function mapStateToProps(state){
  return {
    securities: state.reducer.securities,
    showPricesModal: state.UIreducer.showPricesModal, 
    
  }
}

const connectedSecuritiesContainer = connect(mapStateToProps, {
  showAddSecurity
})(SecuritiesContainer)

export default connectedSecuritiesContainer