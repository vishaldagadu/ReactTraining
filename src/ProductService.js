import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com/products';

const ProductService = {
    getAllProducts: async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data.products; // Access the "products" array
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
        
    },
    getProductById: async (id) => {
        try {
            const response = await axios.get(`<span class="math-inline">\{API\_BASE\_URL\}/</span>{id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product with ID ${id}:`, error);
            throw error;
        }
    },
    // You can add more API call functions here as needed
};

export default ProductService;