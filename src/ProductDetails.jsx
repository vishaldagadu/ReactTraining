import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from './ProductService';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await ProductService.getProductById(id);
                setProduct(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '300px' }} />
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> {product.rating}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            {/* Add more details as needed */}
        </div>
    );
}

export default ProductDetails;