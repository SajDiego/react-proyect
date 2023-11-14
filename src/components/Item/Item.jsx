import React from 'react';

const Item = ({product}) => {
    return (
        <div>
            <img src={product.img} alt="" />
            <h2>{product.producto}</h2>
            <p>Precio:{product.precio}</p>
            <p>Stock:{product.stock}</p>
            <p>Descripcion:{product.descripcion}</p>
        </div>
    );
};

export default Item;