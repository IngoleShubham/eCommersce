import React, { useState, useEffect } from 'react';
// import { Backdrop, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/cartSlice';
import { fetchProducts } from '../Store/productSlice';
import { STATUSES } from '../Store/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
      dispatch(fetchProducts());
    //   console.log(data);
  }, [dispatch]);

  const handleAdd = (product) => {
      dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
      return <div>loading...</div>
  }
  if (status === STATUSES.ERROR) {
      return <h2>Something went wrong!</h2>;
  }
  
  return (
    <>
      <div className="productsWrapper">
          {data?.map((product) => (
              <div className="card" key={product.id}>
                  <img src={product.image} alt="" />
                  <h4>{product.title}</h4>
                  <h5>{product.price}</h5>
                  <button onClick={() => handleAdd(product)} className="btn">
                      Add to cart
                  </button>
              </div>
          ))}
      </div>
    </>
  )
}

export default Products