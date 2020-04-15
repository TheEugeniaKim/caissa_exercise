import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import reducer from '../redux/reducer'
import UIreducer from '../redux/UIreducer'
import throttle from 'lodash/throttle'
import {localState, saveState} from '../LocalStorage'
import thunk from 'redux-thunk'
import {createPromise} from 'redux-promise-middleware'

import {createLogger} from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = () => {
  const persistedState = localState()
  const Reducers = combineReducers({reducer, UIreducer})

  const store = createStore(
    Reducers,
    persistedState,
    composeEnhancers(
      applyMiddleware(createPromise(),createLogger(), thunk)
    )
  )
  
  //below we want to save state changes in securities to the local state
  //but we want to make sure we don't continuously call this method because parsing JSON is expensive
  //only update at most once a second 
  store.subscribe(throttle(() => {
    saveState({
      reducer: {securities: store.getState().reducer.securities}
    })
  }, 1000))

  return store
}

export default configureStore