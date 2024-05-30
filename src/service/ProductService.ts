import axios from "axios";
import {Product} from "../types/Product.ts";
export default class ProductService{
    getAllProducts() {
        return axios.get('/api/product');
    }

    addProduct(product: Product) {
        return axios.post('/api/product', product);
    }
    updateProduct(id:number, student: Product) {
        return axios.put(`/api/product/${id}`,student);
    }
    deleteStudents(id: number) {
        return axios.delete(`/api/product/${id}`);
    }


}