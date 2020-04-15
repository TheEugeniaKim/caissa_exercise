import React from 'react'
import {connect} from 'react-redux'
import {closePrices, deletePrice, openEditPricesModal, editPrice, createNewPrice} from '../redux/actions'
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import NewPrice from './NewPrice'
import {Button} from 'react-bootstrap'


class Prices extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      propsPass: null
    }
    this.handleAddNewPrice = this.handleAddNewPrice.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  } 

  handleCloseClick(){
    this.props.closePrices()
  }

  handleDelete(props){
    let security = this.props.securities.filter(security => security.id === this.props.securityPricesID)[0]
    let prices = security.prices.filter(price => price.id !== props.original.id)
    let data = {priceInfo: prices, securityInfo: this.props.securityPricesID}
    this.setState({
      data: prices 
    })
    return this.props.deletePrice(data)
  }

  handleEdit(props){
    this.setState((prevState) => {
      return {propsPass: props.original}
    })
    return this.props.openEditPricesModal(props.original)
  }

  handleAddNewPrice(newPrice){
    this.setState((prevState) => {
      return {data: [...prevState.data, newPrice.newPrice]}
    })
    return createNewPrice(newPrice)
  }

  render(){
    const columns = [
      {
        Header: "Date",
        accessor: "date"
      },
      {
        Header: "Price($)",
        accessor: "price"
      }, 
      {
        Header: " ",
        Cell: props => {
          return (
            <Button 
              variant="danger"
              size="sm"
              onClick={()=> this.handleDelete(props)}
            > Delete </Button>
          )
        }
      },
      {
        Header: " ",
        Cell: props => {
          return (
            <Button
              variant="warning"
              size="sm"
              onClick={() => this.handleEdit(props)}
            > Edit </Button>
          )
        }
      }
    ]
    let securityName = this.props.securities.filter(security => security.id===this.props.securityPricesID)[0].name
    return (
      <div>
        <h3>{securityName} Prices</h3>
        <ReactTable
          columns={columns} 
          data={this.props.securities.filter(security=>security.id === this.props.securityPricesID)[0].prices}
          defaultPageSize={5}
          noDataText={"Please wait..."}
        >
        </ReactTable>
        <NewPrice handleAddNewPrice={this.handleAddNewPrice} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    securities: state.reducer.securities,
    securityPricesID: state.UIreducer.securityPricesID
  }
}

const connectedPrices = connect(mapStateToProps,{
  closePrices, 
  deletePrice,
  openEditPricesModal,
  editPrice,
  createNewPrice
})(Prices)

export default connectedPrices