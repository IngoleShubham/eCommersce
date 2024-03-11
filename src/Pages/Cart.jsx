// import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.cart);
  console.log(products)
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
              {products.length !== 0 ? products?.map((product) => (
                  <div key={product.id} className="cartCard">
                      <img src={product.image} alt="" />
                      <h5>{product.title}</h5>
                      <h5>{product.price}</h5>
                      <button
                          className="btn"
                          onClick={() => handleRemove(product.id)}
                      >
                          Remove
                      </button>
                  </div>
              )) : <div>Cart is Empty</div>}
            </div>
        </div>
    );
};

export default Cart;