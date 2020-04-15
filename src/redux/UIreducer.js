const defaultState = {
  showModal: false,
  showAddSecurityModal: false, 
  showEditSecurityModal: false,
  securityEdit: {},
  showPricesModal: false, 
  showEditPricesModal: false, 
  securityPricesID: "",
  pricesEdit: {}
}

function UIreducer(prevState = defaultState, action){
  switch(action.type){
    case "TOGGLE_MODAL":
      return {
        ...prevState,
        showModal: !prevState.showModal
      }
    case "SHOW_ADD_SECURITY_MODAL":
      return {
        ...prevState, 
        showModal: !prevState.showModal,
        showAddSecurityModal: true, 
        showEditSecurityModal: false,
        showEditPricesModal: false,
      }
    case "OPEN_SECURITY_EDIT_MODAL":
      return {
        ...prevState,
        showModal: !prevState.showModal,
        showEditSecurityModal: true,
        securityEdit: action.payload,
        showAddSecurityModal: false, 
        showEditPricesModal: false,
      }
    case "CLOSE_SECURITY_EDIT_MODAL":
      return {
        ...prevState,
        showModal: !prevState.showModal,
        showEditSecurityModal: false
      }
    case "CLOSE_PRICES":
      return {
        ...prevState, 
        showPricesModal: false
      }
    case "CHANGE_SECURITY_TYPE_SHOWN":
      return {
        ...prevState, 
        showPricesModal: true,
        securityPricesID: action.payload
      }
    case "OPEN_EDIT_PRICES_MODAL":
      return {
        ...prevState,
        showModal: !prevState.showModal,
        showEditPricesModal: true, 
        pricesEdit: action.payload, 
        showAddSecurityModal: false, 
        showEditSecurityModal: false
      }
    default: 
      return prevState
  }
}

export default UIreducer