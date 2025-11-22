import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axiosInstance from "../apis/config";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const itemsPerPage = 6;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    useEffect(() => {
        axiosInstance
            .get('/')
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.log(err));
    }, []);

    const currentPageProducts = products.slice(start, end);

    return (
        <div className="container mt-4" style={{ direction: 'ltr' }}>
            <div className="row">
                {currentPageProducts.map((product) => (
                    <div className="col-md-4 mb-3" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center mt-4">
                <button
                    className="btn btn-primary mx-2"
                    disabled={page === 1}
                    onClick={() => setPage(prev => prev - 1)}
                >
                    Prev
                </button>

                <span className="mx-2">Page {page}</span>

                <button
                    className="btn btn-primary mx-2"
                    disabled={end >= products.length}
                    onClick={() => setPage(prev => prev + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;
