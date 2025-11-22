import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from "../apis/config";
import { addToCart } from '../store/slices/cartSlice';
import { selectIsItemInCart } from '../store/slices/cartSelectors';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const params = useParams();
    const dispatch = useDispatch();

    const isInCart = useSelector(state =>
        product ? selectIsItemInCart(state, product.id) : false
    );

    useEffect(() => {
        axiosInstance
            .get("/")
            .then((res) => {
                const foundProduct = res.data.products.find(
                    (p) => p.id === parseInt(params.id)
                );
                setProduct(foundProduct);
            })
            .catch((err) => console.log(err));
    }, [params]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.images[0],
                brand: product.brand,
                stock: product.stock
            }));
        }
    };

    if (!product) return <div className="container my-4">Loading...</div>;

    return (
        <div className="container my-5">
            <div className="card shadow-sm">
                <div className="row g-0">
                    <div className="col-md-5 p-3">
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="img-fluid rounded-start w-100"
                            style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                        <div className="d-flex mt-3 gap-2">
                            {product.images.map((image, index) => (
                                <img key={index} src={image} className="img-thumbnail" style={{ width: '80px', cursor: 'pointer' }} />
                            ))}
                        </div>
                    </div>

                    <div className="col-md-7 p-4">
                        <div className="card-body">
                            <h1 className="card-title display-5">{product.title}</h1>
                            <p className="text-muted mb-3">{product.brand}</p>
                            <div className="mb-4 p-3 bg-light rounded">
                                <h2 className="text-success">${product.price.toFixed(2)}</h2>
                                {product.discountPercentage && (
                                    <span className="badge bg-success mb-2">Discount: {product.discountPercentage}%</span>
                                )}
                                <p className="text-danger small">
                                    {product.stock} items Left
                                </p>
                                <div className="d-flex gap-3 mt-3">
                                    <button className="btn btn-dark btn-lg flex-grow-1">Buy Now</button>
                                    <button
                                        className={`btn btn-lg flex-grow-1 ${isInCart ? 'btn-success' : 'btn-outline-dark'}`}
                                        onClick={handleAddToCart}
                                    >
                                        {isInCart ? '✓ Added to Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>

                            <p className="card-text">{product.description}</p>

                            <ul className="list-group list-group-flush mt-4">
                                <li className="list-group-item"><strong>Category:</strong> <span className="badge bg-info text-dark">{product.category}</span></li>
                                <li className="list-group-item"><strong>Availability:</strong> {product.availabilityStatus}</li>
                                <li className="list-group-item"><strong>SKU:</strong> {product.sku}</li>
                                <li className="list-group-item"><strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</li>
                                <li className="list-group-item"><strong>Warranty:</strong> {product.warrantyInformation}</li>
                                <li className="list-group-item"><strong>Return Policy:</strong> {product.returnPolicy}</li>
                            </ul>

                            <div className="mt-4 pt-4 border-top">
                                <h5 className="mb-3">Customer Reviews</h5>
                                {product.reviews.map((review, index) => (
                                    <div key={index} className="border-bottom pb-2 mb-2">
                                        <p className="mb-1">
                                            <strong>{review.reviewerName}</strong> - Rating:
                                            <span className="text-warning ms-1">{'★'.repeat(review.rating)}</span>
                                            <span className="text-muted ms-1">({review.rating}/5)</span>
                                        </p>
                                        <p className="mb-1 fst-italic">"{review.comment}"</p>
                                        <small className="text-muted">{new Date(review.date).toLocaleDateString()}</small>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;