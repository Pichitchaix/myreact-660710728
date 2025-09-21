import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/");
    };

    return(
        <div>
            <h1>404 - Not Found</h1>
        </div>
    );
    

};

export default NotFound;