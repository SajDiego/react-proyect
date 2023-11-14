import React from 'react';

const Item = ({product}) => {
    return (
        <div>
            <img src={product.img} alt="" />
            <h2>{product.producto}</h2>
            <p>{product.precio}</p>
            <p>{product.stock}</p>
            <p>{product.descripcion}</p>
        </div>
    );
};

export default Item;