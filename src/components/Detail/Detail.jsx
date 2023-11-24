import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';


const Detail = () => {
    const [product, setProduct] = useState ()
    const {idProduct} = useParams ()

    useEffect(()=>{
        const fetchData = () => {
            return fetch("/data/lista.json")
            .then((response)=>response.json())
            .then((data)=> {
                const found = data.find((item)=> item.id == idProduct) 
                setProduct(found)
            })
            .catch((error)=>console.log(error))
        }

        fetchData()
    },[idProduct])
    return (
        <>
           {product ? 
           <div>
           <img src={product.img} alt=""/>
           <p>Precio:{product.precio}</p>
           <p>Stock:{product.stock}</p>
           <p>Descripcion:{product.descripcion}</p>
           </div>
        : <p>cargando</p>
           }
        </>
    );
};

export default Detail;