import React, {createContext, useEffect, useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3001/apis/users')
        .then(response => response.json())
        .then((json) => {
        setUser(json.user);
        
        });
    }, []);
    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}