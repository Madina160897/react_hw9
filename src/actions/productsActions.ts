import { createAction } from "@reduxjs/toolkit";

export interface IProductAction {
  name: string;
  price: number;
 
}
export interface IEditProductAction {
  name: string;
  price: number;
  id: number
}

export const createProductAction = createAction<IProductAction>("PRODUCTS_CREATE");
export const deleteProductAction = createAction("PRODUCTS_DELETE");
export const editProductAction = createAction<IEditProductAction>("PRODUCTS_EDIT");
