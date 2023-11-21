import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({product}) => {
    const onAdd =(cantidad)=>{
        alert(cantidad)

    }

    return (
        <><div>
            <img src={product.img} alt="" />
            <h2>{product.producto}</h2>
            {/* <p>Precio:{product.precio}</p>
            <p>Stock:{product.stock}</p>
            <p>Descripcion:{product.descripcion}</p>  */}
          </div>
          
           <ItemCount inicial = {1} stock={product.stock} onAdd={onAdd}/>
           
          </>
    );
}

export default Item;