import { useState, useEffect } from "react";
import {getProductsById} from "../asyncMock"
import ItemDetail from "./ItemDetail";

const IntemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    useEffect(() =>  {
        getProductsById("1")
            then(response=>{
                setProduct(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [])
    
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default IntemDetailContainer 