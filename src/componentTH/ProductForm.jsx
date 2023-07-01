import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '../redux/product/action';
export default function ProductForm() {
    const{selectedProduct}=useSelector(state=>state.productReducer)
    const [product, setProduct] = useState({
        id: Date.now(),
        name: '',
        price: ''
    });
    const dispatch = useDispatch()
    useEffect(()=>{
        if (selectedProduct) {
            setProduct(selectedProduct)    
        }else{
            setProduct({
                id:'',
                name:'',
                price:''
            })
        }
    },[selectedProduct])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (product.id) {
            dispatch(updateProduct(product))
            } else {
        const newProduct = { ...product, id: Date.now() }
        dispatch(addProduct(newProduct))
            }
        setProduct({
            id:'',
            name:'',
            price:''
        })
    }

    const hanleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    };
return (
    <div>
        <h1>{!selectedProduct?'ADD PRODUCT':'EDIT PRODUCT'}</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' id='name' name="name" value={product.name} placeholder='Name' onChange={hanleChange} />
            </div >
            <div>
                <input type='text' id='price' name="price" value={product.price} placeholder='Price' onChange={hanleChange} />
            </div>
            <button type="submit">{!selectedProduct?'add':'edit'}</button>
        </form>
    </div>
)
}


