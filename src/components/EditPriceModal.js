import React from 'react'
import {connect} from 'react-redux'
import {editPrice, toggleModal, closePrices} from '../redux/actions'
import {Button} from 'react-bootstrap'

class EditPriceModal extends React.Component{

  state = {
    id: null,
    date: null,
    price: null
  }

  componentDidMount(){
    this.setState({
      id: this.props.price.id, 
      date: this.props.price.date,
      price: this.props.price.price
    })
  }

  handleDateChange(event){
    this.setState({
      date: event.target.value
    })
  }

  handlePriceChange(event){
    this.setState({
      price: event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()
    let newPrice = {newPrice: this.state, security: this.props.securityPricesID}
    this.props.editPrice(newPrice)
    this.setState({
      id: "",
      date: "",
      price: null
    })
    this.props.toggleModal()
    return this.props.closePrices()
  }

  render(){
    return(
      <div>
        <form onSubmit={(event) => this.onSubmit(event)}>
        <label>
          Date: 
          <input 
            type="text" 
            name="date" 
            value={this.state.date || ""} 
            onChange={(event) => this.handleDateChange(event)} 
          />
        </label>
        <br/>

        <label>
          Price: 
          <input 
            type="text" 
            name="price" 
            value={this.state.price || ""}
            onChange={(event)=>this.handlePriceChange(event)}
          />
          </label>
          <br/>
          <Button 
            type="submit" 
            value="Submit" 
            variant="outline-primary"
            size="sm"
          >Submit</Button>

        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    securityPricesID: state.UIreducer.securityPricesID
  }
}

const connectedPricesModal = connect(mapStateToProps,{
  editPrice,
  toggleModal,
  closePrices
})(EditPriceModal)

export default connectedPricesModal