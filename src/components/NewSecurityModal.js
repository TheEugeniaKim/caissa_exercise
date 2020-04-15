import React from 'react'
import {connect} from 'react-redux'
import {createNewSecurity, showAddSecurity} from '../redux/actions'
import {CountryDropdown} from 'react-country-region-selector';
import {bindActionCreators} from 'redux'
import {v4} from 'node-uuid'
import {Button} from 'react-bootstrap'

class NewSecurityModal extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: "",
      isin: "",
      country: ""
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleISINChange = this.handleISINChange.bind(this)
    this.selectCountry = this.selectCountry.bind(this)
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleISINChange = (event) => {
    this.setState({
      isin: event.target.value
    })
  }

  selectCountry = (value) => {
    this.setState({
      country: value
    })
  }

  onSubmit(event){
    event.preventDefault()
    let newSecurity = {
      id: v4(),
      name: this.state.name,
      isin: this.state.isin, 
      country: this.state.country
    }
    this.setState({
      name: "",
      isin: "",
      country: ""
    })
    return this.props.createNewSecurity(newSecurity)
  }

  onClose(){
    return this.props.showAddSecurity()
  }

  render(){
    return(
      <div>
        <form onSubmit={(event) => {this.onSubmit(event)}}>

          <label>
            Name: 
            <input 
              type="text" 
              name="name" 
              value={this.props.name} 
              onChange={(event) => this.handleNameChange(event)} 
            />
          </label>
          <br/>

          <label>
            ISIN: 
            <input 
              type="text" 
              name="isin" 
              value={this.props.isin}
              onChange={(event)=>this.handleISINChange(event)}
            />
          </label>
          <br/>

          <label>
            Country:
            <CountryDropdown 
              name="country"
              value={this.props.country}
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
    showAddSecurityModal: state.UIreducer.showAddSecurityModal
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    createNewSecurity, 
    showAddSecurity
  }, dispatch)
}

const connectedNewSecurityModal = connect(mapStateToProps, mapDispatchToProps)(NewSecurityModal)

export default connectedNewSecurityModal