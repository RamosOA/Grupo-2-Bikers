import React, {createContext, useEffect, useState} from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3001/apis/products')
        .then(response => response.json())
        .then((json) => {
        setData(json.data);
        
        });
    }, []);
    return (
        <ProductContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </ProductContext.Provider>
    )
}