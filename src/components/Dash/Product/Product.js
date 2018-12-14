import React from 'react'
import './product.css'

const Product = props => (
    <div className="product">
        <div className="product-img">
            <img src={props.product.img_url} />
        </div>

        <div className="product-info">
           <div>
                <p className="product-info-sub">{ props.product.name }</p>
                <p className="product-info-sub">{ `$${props.product.price}` }</p>
           </div>

            <div className="product-buttons">
                <button onClick={ () => props.delete(props.product.id) }>Delete</button>
                <button >Edit</button>
            </div>
        </div>

        
    </div>
)

export default Product