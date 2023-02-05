import React from "react";
import { useState, useEffect } from "react";

const Users = () => {

const [data, setData] = useState([]);

useEffect(() => {
  fetch('http://localhost:3001/apis/users')
    .then(response => response.json())
    .then((json) => {
      setData(json.data);
      
    });
}, []);

return(
    <div>
        <p>{data.length}</p>
    </div>
)
}

export default Users;