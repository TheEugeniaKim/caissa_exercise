import {v4} from 'node-uuid'

export function getSecurities(data){
  return {
    type: "GET_SECURITIES", 
    payload: data
  }
}

export function showAddSecurity(){
  return {type: "SHOW_ADD_SECURITY_MODAL"}
}

export function createNewSecurity(newSecurity){
  return {
    type: "CREATE_NEW_SECURITY", 
    id: v4(),
    payload: newSecurity
  }
}

export function deleteSecurity(securityID){
  return {
    type: "DELETE_SECURITY",
    payload: securityID
  }
}

export function openSecurityEditModal(security){
  return {
    type: "OPEN_SECURITY_EDIT_MODAL",
    payload: security
  }
}

export function closeSecurityEditModal(){
  return {
    type: "CLOSE_SECURITY_EDIT_MODAL"
  }
}

export function editSecurity(security){
  return {
    type: "EDIT_SECURITY",
    payload: security
  }
}

export function closePrices(){
  return {type: "CLOSE_PRICES"}
}

export function changeSecurityPriceShown(id){
  return {
    type: "CHANGE_SECURITY_TYPE_SHOWN",
    payload: id 
  }
}

export function deletePrice(priceID, securityID){
  return {
    type: "DELETE_PRICE",
    payload: priceID
  }
}

export function openEditPricesModal(priceObj){
  return {
    type: "OPEN_EDIT_PRICES_MODAL",
    payload: priceObj
  }
}

export function editPrice(newPrice){
  return {
    type: "EDIT_PRICE",
    payload: newPrice
  }
}

export function createNewPrice(newPrice){
  return {
    type: "CREATE_NEW_PRICE",
    payload: newPrice
  }
}

export function toggleModal(){
  return {
    type: "TOGGLE_MODAL" 
  }
}