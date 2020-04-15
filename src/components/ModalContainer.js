import React from 'react' 
import {connect} from 'react-redux'
import {Modal} from 'react-bootstrap'
import NewSecurityModal from './NewSecurityModal'
import EditSecurityModal from './EditSecurityModal'
import EditPriceModal from './EditPriceModal'

class ModalContainer extends React.Component {

  heading = () => {
    if (this.props.showAddSecurityModal){
      return "Add Security"
    } else if (this.props.showEditSecurityModal){
      return "Edit Security"
    } else if (this.props.showEditPricesModal){
      return "Edit Price"
    } 
  }

  render(){
    return (
      <div>
        <Modal.Header
          closeButton
        >
          {this.heading()} 
        </Modal.Header>

        <Modal.Body>
          {
            this.props.showAddSecurityModal ? 
            <NewSecurityModal /> :
            null
          } 
          {
            this.props.showEditSecurityModal ?
            <EditSecurityModal security={this.props.securityEdit} /> :
            null
          }
          {
            this.props.showEditPricesModal ? 
            <EditPriceModal price={this.props.pricesEdit} /> :
            null 
          }
        </Modal.Body>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    showAddSecurityModal: state.UIreducer.showAddSecurityModal,
    showEditSecurityModal: state.UIreducer.showEditSecurityModal,
    showEditPricesModal: state.UIreducer.showEditPricesModal,
    securityEdit: state.UIreducer.securityEdit,
    pricesEdit: state.UIreducer.pricesEdit
  }
}


const connectedModalContainer = connect(mapStateToProps,null)(ModalContainer)

export default connectedModalContainer