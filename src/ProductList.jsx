import React, { useState, useEffect } from 'react';
import ProductService from './ProductService';
import {Link} from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ProductService.getAllProducts();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                      <li key={product.id}>
                      <Link to={`/products/${product.id}`}>{product.title} - ${product.price}</Link>
                  </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;