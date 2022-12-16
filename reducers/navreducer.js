import { createSlice } from '@reduxjs/toolkit'

export const navigation = createSlice({
  name: 'forNavigation',
  initialState: { selectedLink: "dashboard"},
  reducers: {
    jumpNavigation: (state, action) => {
        state.selectedLink=action.payload;
    }
  }
})

export const getCurrentPage = state => state.forNavigation.selectedLink
export const { jumpNavigation } = navigation.actions
export default navigation.reducer