import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'order',
  initialState: {
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
        state.count = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = counterSlice.actions

export default counterSlice.reducer