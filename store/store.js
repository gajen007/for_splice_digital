import { configureStore } from '@reduxjs/toolkit'
import updateScreenReducer from '../reducers/calcreducer'

export default configureStore({
  reducer: {
    forValueOnScreen: updateScreenReducer
  }
})