import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteProduct, selectedProduct } from "../redux/product/action"
export default function productList() {
    const productReducer = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("productReducer effect", productReducer)
    }, [productReducer])
    const handleEdit = (product) => {
        dispatch(selectedProduct(product))
    }
    
    return (
        <div>
            <h1>productList</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        {productReducer.products.map((product) =>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>
                                    <button onClick={() => handleEdit(product)}>Edit</button>
                                    <button onClick={() => {
                                        dispatch(deleteProduct(product.id))
                                    }}>delete</button>

                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </thead>
            </table>
        </div>
    )
}
