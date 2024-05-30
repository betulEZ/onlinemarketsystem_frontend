import ProductService from "./service/ProductService.ts";
import {useEffect, useState} from "react";
import {Product} from "./types/Product.ts";

const productService=new ProductService();
export default function HomePage(){
    const [products, setProducts]=useState<Product[]>([]);

    useEffect(() => {
        productService.getAllProducts().then((response) => {
            setProducts(response.data);
        });
    }, []);

    return(
        <>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Quality: {product.quality}</p>
                </div>
            ))}
        </>
    );
}