import { createSlice } from '@reduxjs/toolkit'

// Slice
export const counterSlice = createSlice({
  name: 'counter',   //Slice name
  initialState:{    //Initial value of  slice
    value: 0
  },


  reducers: {  // All the event / action function definations are present inside the reducer.
    // Actions
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
        state.value = 0
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer