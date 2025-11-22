import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { selectIsItemInCart } from '../store/slices/cartSelectors';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isInCart = useSelector(state => selectIsItemInCart(state, product.id));

    const handleImageClick = () => {
        navigate(`/product/${product.id}`);
    };

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            brand: product.brand,
            stock: product.stock
        }));
    };

    return (
        <div className="card h-100" >
            <div className="position-relative" onClick={handleImageClick} style={{ cursor: "pointer" }}>
                <img
                    src={product.images[0]}
                    className="card-img-top"
                    alt={product.title}
                />
                {product.availabilityStatus === "In Stock" ? (
                    <span className="badge bg-success position-absolute top-0 start-0 m-2">
                        {product.availabilityStatus}
                    </span>
                ) : (
                    <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                        {product.availabilityStatus}
                    </span>
                )}
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="text-muted mb-1">{product.brand}</p>
                <p className="card-text fw-bold">${product.price.toFixed(2)}</p>

                <button
                    className={`btn mt-auto ${isInCart ? 'btn-success' : 'btn-outline-primary'}`}
                    onClick={handleAddToCart}
                >
                    {isInCart ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;