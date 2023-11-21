import React, {useState} from 'react';

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
        <div>
            <button onClick={incremento}>Incrementar</button>
            <span>{count}</span>
            <button onClick={decremento}>Decrementar</button>
            <button onClick={()=>{onAdd (count)}}></button>
        </div>
    );
};

export default ItemCount;