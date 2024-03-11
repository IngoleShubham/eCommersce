import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { products } = useSelector((state) => state.cart);
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                width: '100%',
                background: '#2F3C4F',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px',
                    widht: '100%',
                }}
            >
                <span className='logo'>E-Commerse</span>
                <div>
                    <Link className='navLink' to='/'>
                        Home
                    </Link>
                    <Link className='navLink' to='/cart'>
                        Cart
                    </Link>
                    <span className='cartCount'>
                        Cart items: {products?.length}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
