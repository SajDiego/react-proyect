import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const Item = ({product}) => {
    const onAdd =(cantidad)=>{
        alert(cantidad)

    }

    return (
        <><>
            <h2> <Link to={`/item/${product.id}`}>{product.producto}</Link></h2>
            <img src={product.img} alt="" />
            {/* <p>Precio:{product.precio}</p>
            <p>Stock:{product.stock}</p>
            <p>Descripcion:{product.descripcion}</p>  */}
          </>
          
           <ItemCount inicial = {1} stock={product.stock} onAdd={onAdd}/>
           
          </>
    );
}

export default Item;