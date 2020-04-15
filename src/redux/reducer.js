import {v4} from 'node-uuid'

const defaultState = {
  securities: [{
    id: v4(),
    name: "Money Market Account",
    country: "Brazil",
    isin: "YTVEFMZ1",
    prices: 
      [
        {
          id: v4(),
          date: "04/06/2020",
          price: 300
        },
        {
          id: v4(),
          date: "04/07/2020",
          price: 400
        },
        {
          id: v4(),
          date: "04/08/2020",
          price: 350
        },
        {
          id: v4(),
          date: "04/09/2020",
          price: 450
        } 
      ]
  },
  {
    id: v4(),
    name: "Home Loan Account",
    country: "Svalbard & Jan Mayen Islands",
    isin: "LJTUESX1348",
    prices: 
      [
        {
          id: v4(),
          date: "04/06/2020",
          price: 800
        },
        {
          id: v4(),
          date: "04/07/2020",
          price: 700
        },
        {
          id: v4(),
          date: "04/08/2020",
          price: 650
        },
        {
          id: v4(),
          date: "04/09/2020",
          price: 600
        } 
      ]
  }, 
  {
    id: v4(),
    name: "Credit Card Account",
    country: "Seychelles",
    isin: "MVTODGU1139",
    prices: 
      [
        {
          id: v4(),
          date: "04/06/2020",
          price: 1100
        },
        {
          id: v4(),
          date: "04/07/2020",
          price: 900
        },
        {
          id: v4(),
          date: "04/08/2020",
          price: 1000
        },
        {
          id: v4(),
          date: "04/09/2020",
          price: 1000
        }  
      ]
  }]
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "CREATE_NEW_SECURITY":
      return {
        ...prevState, 
        securities: [...prevState.securities, action.payload]
      }
    case "DELETE_SECURITY":
      return {
        ...prevState, 
        securities: prevState.securities.filter(security => security.id !== action.payload)
      }
    case "EDIT_SECURITY":
      let index = prevState.securities.findIndex(security => security.id === action.payload.id)
      let newSecurities = prevState.securities
      newSecurities[index].name = action.payload.name 
      newSecurities[index].isin = action.payload.isin
      newSecurities[index].country = action.payload.country
      return {
        ...prevState, 
        securities: newSecurities
      }
    case "DELETE_PRICE":      
      let i = prevState.securities.findIndex(security => security.id === action.payload.securityInfo)
      let newSecuritiesWithDeletedPrice = prevState.securities
      newSecuritiesWithDeletedPrice[i].prices = action.payload.priceInfo 
      return {
        ...prevState, 
        securities: newSecuritiesWithDeletedPrice
      }
    case "EDIT_PRICE":
      let securityLocation = prevState.securities.findIndex(security => security.id === action.payload.security)
      let edited = prevState.securities
      let priceLocation = edited[securityLocation].prices.findIndex(price => price.id === action.payload.newPrice.id)
      edited[securityLocation].prices[priceLocation] = action.payload.newPrice
      return {
        ...prevState,
        securities: edited
      }
    case "CREATE_NEW_PRICE":
      let findSecurityIndex = prevState.securities.findIndex(security => security.id === action.payload.securityID)
      let newData = prevState.securities
      newData[findSecurityIndex].prices.push(action.payload.newPrice)
      return {
        ...prevState,
        securities: newData
      }
    default: 
      return prevState
  }
}

export default reducer 