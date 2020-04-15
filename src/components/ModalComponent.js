import React from 'react' 
import {Modal, Button} from 'react-bootstrap'
import ModalContainer from './ModalContainer'

class ModalComponent extends React.Component{

  render(){
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalContainer />  

        <Modal.Footer>
          <Button onClick={()=> this.props.onHide()}> Close </Button>
        </Modal.Footer>
      </Modal>
    )
  }  
}

export default ModalComponent