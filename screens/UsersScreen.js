import React from "react";
import User from "../components/User";

import { useState, useEffect, } from "react";
import { getUser } from "../services/apiConfig";

const UsersScreen = () => {
    const [users, setUsers] = useState([]);
    // console.log(users)

    useEffect(() => {
        let mounted = true;
        getUser().then((items) => {
            if (mounted) {
                setUsers(items.data.data)
            }
        })
        return () => mounted = false;
    }, [])

    return <User userProperty={users} />
            
                
}

export default UsersScreen