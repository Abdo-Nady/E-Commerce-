import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    selectCartItems,
    selectCartTotalCount,
    selectCartTotalPrice
} from '../store/slices/cartSelectors';
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart
} from '../store/slices/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector(selectCartItems);
    const totalCount = useSelector(selectCartTotalCount);
    const totalPrice = useSelector(selectCartTotalPrice);

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleClearCart = () => {
        if (window.confirm('Are you sure you want to clear your cart?')) {
            dispatch(clearCart());
        }
    };

    if (totalCount === 0) {
        return (
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center py-5">

                        {/* Empty Cart Icon */}
                        <div className="mb-4 opacity-50">
                            <i className="bi bi-cart-x display-1"></i>
                        </div>

                        <h2 className="fw-bold mb-3">Your Cart is Empty</h2>
                        <p className="text-muted mb-4">Looks like you haven't added anything yet.</p>

                        <button
                            className="btn btn-dark btn-lg px-5 rounded-pill shadow-sm"
                            onClick={() => navigate('/')}
                        >
                            <i className="bi bi-bag me-2"></i>
                            Start Shopping
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="row mb-4">
                <div className="col">
                    <h1 className="fw-bold mb-2">Shopping Cart</h1>
                    <p className="text-muted">
                        <i className="bi bi-bag-check me-2"></i>
                        {totalCount} {totalCount === 1 ? 'item' : 'items'} in your cart
                    </p>
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-outline-danger rounded-pill"
                        onClick={handleClearCart}
                    >
                        <i className="bi bi-trash me-2"></i>
                        Clear Cart
                    </button>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-0">
                            {cartItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="border-bottom"
                                    style={{ background: "#fff", transition: "0.2s" }}
                                >
                                    <div className="p-4">
                                        <div className="row g-3 align-items-center">

                                            {/* Product Image */}
                                            <div className="col-md-2 col-3">
                                                <div
                                                    className="rounded overflow-hidden shadow-sm"
                                                    style={{ background: "#f8f9fa", padding: "8px" }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="img-fluid"
                                                        style={{
                                                            maxHeight: "90px",
                                                            objectFit: "contain",
                                                            width: "100%"
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Product Info */}
                                            <div className="col-md-4 col-9">
                                                <h6 className="mb-1 fw-bold" style={{ fontSize: "0.95rem" }}>
                                                    {item.title}
                                                </h6>
                                                <p className="text-muted small mb-1">{item.brand}</p>

                                                <span className="badge bg-body-secondary text-dark border fw-semibold px-3 py-2 rounded-pill">
                                                    Stock: {item.stock}
                                                </span>
                                            </div>

                                            {/* Quantity */}
                                            <div className="col-md-3 col-6">
                                                <div
                                                    className="d-flex align-items-center justify-content-between bg-light rounded-pill px-2 py-1 shadow-sm"
                                                    style={{ maxWidth: "150px" }}
                                                >
                                                    <button
                                                        className="btn btn-sm btn-outline-secondary rounded-circle"
                                                        onClick={() => handleDecrement(item.id)}
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <i className="bi bi-dash">-</i>
                                                    </button>

                                                    <span className="fw-bold">{item.quantity}</span>

                                                    <button
                                                        className="btn btn-sm btn-outline-secondary rounded-circle"
                                                        onClick={() => handleIncrement(item.id)}
                                                        disabled={item.quantity >= item.stock}
                                                    >
                                                        <i className="bi bi-plus">+</i>
                                                    </button>
                                                </div>

                                                {item.quantity >= item.stock && (
                                                    <small className="text-danger mt-1 d-block">
                                                        <i className="bi bi-exclamation-circle me-1"></i>
                                                        Max stock reached
                                                    </small>
                                                )}
                                            </div>

                                            {/* Price */}
                                            <div className="col-md-2 col-4 text-end">
                                                <div className="fw-bold text-primary mb-1 fs-5">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                                <small className="text-muted">${item.price.toFixed(2)} each</small>
                                            </div>

                                            {/* Remove Button */}
                                            <div className="col-md-1 col-2 text-end">
                                                <button
                                                    className="btn btn-sm px-3 py-1 rounded-pill shadow-sm"
                                                    style={{
                                                        background: "#ffe5e5",
                                                        color: "#d9534f",
                                                        fontWeight: "600",
                                                        fontSize: "0.8rem",
                                                        border: "1px solid #ffcccc"
                                                    }}
                                                    onClick={() => handleRemove(item.id)}
                                                >
                                                    <i className="bi bi-trash me-1"></i>
                                                    Remove
                                                </button>

                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    {index < cartItems.length - 1 && <div className="border-bottom"></div>}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
                        <div className="card-body p-4">
                            <h5 className="fw-bold mb-4">Order Summary</h5>

                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Subtotal</span>
                                <span className="fw-semibold">${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Shipping</span>
                                <span className="text-success fw-semibold">
                                    <i className="bi bi-check-circle me-1"></i>
                                    Free
                                </span>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Tax</span>
                                <span className="fw-semibold">$0.00</span>
                            </div>

                            <hr className="my-3" />

                            <div className="d-flex justify-content-between mb-4">
                                <span className="h5 fw-bold">Total</span>
                                <span className="h4 fw-bold text-primary">${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="d-grid gap-2">
                                <button className="btn btn-dark btn-lg rounded-pill">
                                    <i className="bi bi-lock me-2"></i>
                                    Proceed to Checkout
                                </button>

                                <button
                                    className="btn btn-outline-secondary rounded-pill"
                                    onClick={() => navigate('/')}
                                >
                                    <i className="bi bi-arrow-left me-2"></i>
                                    Continue Shopping
                                </button>
                            </div>

                            <div className="mt-4 p-3 bg-light rounded">
                                <div className="d-flex align-items-center mb-2">
                                    <i className="bi bi-shield-check text-success me-2"></i>
                                    <small className="fw-semibold">Secure Checkout</small>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="bi bi-truck text-success me-2"></i>
                                    <small className="fw-semibold">Free Shipping</small>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-arrow-counterclockwise text-success me-2"></i>
                                    <small className="fw-semibold">Easy Returns</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;