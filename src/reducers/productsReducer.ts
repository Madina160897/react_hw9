import { createReducer } from "@reduxjs/toolkit";
import { createProductAction, deleteProductAction, editProductAction } from "../actions/productsActions";
const initialState = {
  list: [{ id: 1, name: "Milk", price: 1230 }],
};

export const productsReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(createProductAction, (state, action) => {
    state.list.push({
      ...action.payload,
      id: state.list.length + Math.random(),
    });
  })
  .addCase(deleteProductAction, (state, action) => {
    state.list = state.list.filter(item => item.id !== action.payload)
  })
  .addCase(editProductAction, (state, action) => {
   
    state.list = state.list.map(item => ((item.id !== action.payload.id)? item : action.payload ))
  });
});
