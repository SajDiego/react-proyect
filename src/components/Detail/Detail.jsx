import React, {useEffect, useState} from 'react';

const Detail = ({ProductId}) => {
    const [product, setProduct] = useState ()

    useEffect(()=>{
        const fetchData = () => {
            return fetch("/data/lista.json")
            .then((response)=>response.json())
            .then((data)=> {
                const foundProduct = data.find((item)=> item.id == ProductId) 
                setProduct(foundProduct)
            })
            .catch((error)=>console.log(error))
        }

        fetchData()
    },[ProductId])
    return (
        <div>
           {product? 
           <div>
            <p>Precio:{product.precio}</p>
            <p>Stock:{product.stock}</p>
            <p>Descripcion:{product.descripcion}</p> 
           </div>
        : <p>cargando</p>
           }
        </div>
    );
};

export default Detail;