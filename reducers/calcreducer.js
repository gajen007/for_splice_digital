import { createSlice } from '@reduxjs/toolkit'

export const updateScreen = createSlice({
  name: 'valueOnScreen',
  initialState: { storedValue: ""},
  reducers: {
    updateValueOnScreen: (state, action) => {
        state.storedValue += action.payload
    },
  }
})

export const getValueFromScreen = state => state.valueOnScreen.storedValue
export const { updateValueOnScreen } = updateScreen.actions
export default updateScreen.reducer