import React from 'react'
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>404 - Page Not Found</h1>
            <p>ขออภัย ไม่พบหน้าที่คุณกำลังค้นหา</p>
            <button 
                onClick={() => navigate("/")}
                style={{ marginTop: "20px", padding: "10px 20px" }}
            >
                กลับไปหน้าแรก
            </button>
        </div>
    );
};
export default NotFound;
