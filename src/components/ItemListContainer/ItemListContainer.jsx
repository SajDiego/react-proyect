import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);
    const {categoryId} = useParams ()
    useEffect (()=>{
        const fetchData= () => {
            return fetch("/data/lista.json")
            .then((response)=>response.json())
            .then((data)=>{
                if(categoryId){
                    const filtroproductos = data.filter(p=>p.categoria == categoryId)
                    setProductos(filtroproductos)
                }else{
                    setProductos(data)
                }
                
            })
            .catch ((error)=> console.log(error))
        }
        fetchData()
    },[categoryId])

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