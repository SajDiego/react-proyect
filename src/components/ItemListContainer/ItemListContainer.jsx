import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);
    useEffect (()=>{
        const fetchData= () => {
            return fetch("/data/lista.json")
            .then((response)=>response.json())
            .then((data)=>{
                setProductos(data)
            })
            .catch ((error)=> console.log(error))
        }
        fetchData()
    },[])

    return (
        <>
        {productos.length == 0 ?
        <h2>Buscando Productos</h2> 
        :
        <ItemList productos={productos}/>}

        </>
    );
};

export default ItemListContainer;