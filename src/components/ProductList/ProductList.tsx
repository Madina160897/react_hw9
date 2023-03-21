import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct } from "../../types";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../actions/productsActions";
import { FC, FormEvent, useState } from "react";
import { EditProduct } from "../index";

interface IProductList{
  isLoading: boolean
}

const ProductList:FC<IProductList> = () => {
  const dispatch = useDispatch();

 

  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.list
  );


  return (
    <div>
      <ul>
        <h1>Products:</h1>
        {products.map((item) => (
          <li className="block-products-list" key={item.id}>
            <div className="flex">
            <h2>
            {item.name}-{item.price}

            </h2>
            {/* @ts-ignore */}
            <button className="btn-mini" onClick={() => {dispatch(deleteProductAction(item.id))}}>X</button>
            
            </div>
            
              {/* @ts-ignore */}
             <EditProduct id={item.id}/>
              
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
