import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/products'; // Replace with your API URL

const ProductService = {
    getAllProducts: async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error; // Re-throw the error to be handled in the component
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

    createProduct: async (product) => {
        try {
            const response = await axios.post(API_BASE_URL, product);
            return response.data;
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    },

    updateProduct: async (id, product) => {
        try {
            const response = await axios.put(`<span class="math-inline">\{API\_BASE\_URL\}/</span>{id}`, product);
            return response.data;
        } catch (error) {
            console.error(`Error updating product with ID ${id}:`, error);
            throw error;
        }
    },

    deleteProduct: async (id) => {
        try {
            await axios.delete(`<span class="math-inline">\{API\_BASE\_URL\}/</span>{id}`);
            return true; // Or return a success message
        } catch (error) {
            console.error(`Error deleting product with ID ${id}:`, error);
            throw error;
        }
    },
};

export default ProductService;