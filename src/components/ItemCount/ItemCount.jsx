import React, {useState, useEffect} from 'react';

const ItemCount = ({inicial,stock, onAdd}) => {
    const [count, setCount] = useState(inicial)
    const incremento =()=> {
        if (count<stock){
            setCount(count+1)
        }
    }
    const decremento =()=>{
        if (count>inicial){
            setCount (count-1)
        }
    }
    return (
        <>
            <button onClick={incremento}>Incrementar</button>
            <span>{count}</span>
            <button onClick={decremento}>Decrementar</button>
            <button onClick={()=>{onAdd (count)}}>Agregar al Carrito</button>
        </>
    );
};

export default ItemCount;