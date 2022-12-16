import { configureStore } from '@reduxjs/toolkit'
import updateScreenReducer from '../reducers/calcreducer'
import navigationReducer from '../reducers/navreducer'

export default configureStore({
  reducer: {
    forValueOnScreen: updateScreenReducer,
    forNavigation: navigationReducer
  }
})