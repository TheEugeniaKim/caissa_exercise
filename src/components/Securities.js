import React from 'react'
import {connect} from 'react-redux'
import {deleteSecurity, closePrices, changeSecurityPriceShown, openSecurityEditModal} from '../redux/actions'
import {Card, Button, ButtonGroup} from 'react-bootstrap'
import v4 from 'node-uuid'


class Security extends React.Component {

  handleOnClick(securityID){
    return this.props.changeSecurityPriceShown(securityID)
  }

  handleDeleteClick(id){
    if (this.props.securityPricesID === id){
      this.props.closePrices()
    }
    return this.props.deleteSecurity(id)
  }

  handleEditClick(security){
    return this.props.openSecurityEditModal(security)
  }
  
  render(){
    return this.props.securities.map(security=> {
    let id = security.id
      return(
        <div key={v4()}>
          <Card 
            key={security.id} 
            style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto'}}
            boarder={'primary'}
            bg={'light'}
          >
            <Card.Header></Card.Header>
            <Card.Title>{security.name}</Card.Title>
            <Card.Text>{security.isin}</Card.Text>
            <Card.Text>{security.country}</Card.Text>
            
            <ButtonGroup>
              <Button variant="outline-primary" onClick={() => this.handleDeleteClick(id)}> Delete </Button>
              <Button variant="outline-primary" onClick={() => this.handleOnClick(id)}> Prices </Button>
              <Button variant="outline-primary" onClick={() => this.handleEditClick(security)} > Edit </Button>
            </ButtonGroup>

          </Card>
          <br/>          
        </div>
      )
    })
  }
}

function mapStateToProps(state){
  return {
    securities: state.reducer.securities,
    securityPricesID: state.UIreducer.securityPricesID
  }
}

const connectedSecurity = connect(mapStateToProps, {
  deleteSecurity, 
  closePrices,
  changeSecurityPriceShown,
  openSecurityEditModal
})(Security)

export default connectedSecurity