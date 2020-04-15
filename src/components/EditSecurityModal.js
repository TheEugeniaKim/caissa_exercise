import React from 'react'
import {connect} from 'react-redux'
import {CountryDropdown} from 'react-country-region-selector'
import {closeSecurityEditModal, editSecurity} from '../redux/actions'
import {Button} from 'react-bootstrap'

class EditSecuritiesModal extends React.Component{

  state = {
    id:"",
    name: "",
    isin: "",
    country: ""
  
  }

  componentDidMount(){
    this.setState({
      id: this.props.security.id,
      name: this.props.security.name,
      isin: this.props.security.isin,
      country: this.props.security.country
    })
  }

  onClose(){
    this.props.closeSecurityEditModal()
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleISINChange(event){
    this.setState({
      isin: event.target.value
    })
  }

  selectCountry(value){
    this.setState({
      country: value
    })
  }

  onSubmit(event){
    event.preventDefault()
    let newSecurity = {
      id: this.state.id,
      name: this.state.name,
      isin: this.state.isin, 
      country: this.state.country
    }
    this.setState({
      id: "",
      name: "",
      isin: "",
      country: ""
    })
    this.props.closeSecurityEditModal()
    return this.props.editSecurity(newSecurity)
  }

  render(){
    return(
      <div>
        <form onSubmit={(event) => this.onSubmit(event)}>

          <label>
            Name: 
            <input 
              type="text" 
              name="name" 
              value={this.state.name} 
              onChange={(event) => this.handleNameChange(event)} 
            />
          </label>
          <br/>

          <label>
            ISIN: 
            <input 
              type="text" 
              name="isin" 
              value={this.state.isin}
              onChange={(event)=>this.handleISINChange(event)}
            />
          </label>
          <br/>

          <label>
            Country:
            <CountryDropdown 
              name="country"
              value={this.state.country}
              onChange={(value) => this.selectCountry(value)}
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
    securities: state.reducer.securities,
    securityEditId: state.UIreducer.securityEditId,
    showEditSecurity: state.UIreducer.showEditSecurityModal
  }
}

const connectedEditSecuritiesModal = connect(mapStateToProps, {
  closeSecurityEditModal, 
  editSecurity
})(EditSecuritiesModal)

export default connectedEditSecuritiesModal