import React from 'react';
import { useLocation } from 'react-router-dom';
import "./product.css";
import HeaderOne from "../../components/headerOne/HeaderOne";

const Product = () => {
    const location=useLocation()

    return (
        <>
            <HeaderOne/>
            <div className='product-container'>
                <div className='product-img-container'>
                    <div className='product-img'>
                        <img src={location.state.image}/>
                    </div>
                    <div className='product-name'>
                        {location.state.name}
                    </div>
                </div>
                <div className='ingredients-container'>
                    <div className='product-ingredients'>
                        <div className='ingredient-header'>Ingredients</div>
                        {location.state.ingredients.map((data)=>{
                            return <p className='ingredient-data'>{data.text}</p>
                        })}
                    </div>
                    <div className='details-container'>
                        <div className='ingredient-header'>Details</div>
                        {location.state.details.map((data)=>{
                            return <p className='ingredient-data'>{data}</p>
                        })}
                    </div>
                </div>
                <div className='product-img-container'>
                    <div>
                        <p className='origin-header'>Origin </p>
                        <p>{location.state.origin}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;