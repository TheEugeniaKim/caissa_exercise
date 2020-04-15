import React from 'react'
import {connect} from 'react-redux'
import {v4} from 'node-uuid'
import {Button} from 'react-bootstrap'


class NewPrice extends React.Component {

  state = {
    date: "",
    price: null
  }

  handleDateChange(event){
    return this.setState({
      date: event.target.value
    })
  }

  handlePriceChange(event){
    return this.setState({
      price: event.target.value
    })
  }

  onSubmit = async event => {
    event.preventDefault()
    let newPrice = {newPrice: {
      id: v4(),
      date: this.state.date,
      price: this.state.price 
    }, securityID: this.props.securityPricesID}

    this.setState({
      date: "",
      price: null
    })
    return this.props.handleAddNewPrice(newPrice)
  }

  render(){
    return (
      <div> 
        <form onSubmit={(event) => this.onSubmit(event)}>
          <h4> Add New Price </h4>

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

const connectedNewPrice = connect(mapStateToProps,null)(NewPrice)

export default connectedNewPrice