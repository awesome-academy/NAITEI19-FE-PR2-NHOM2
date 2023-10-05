import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
function LogoutPage() {
    const history = useNavigate();
    useEffect(() => {
        // Perform logout logic here, such as clearing local storage or cookies
        localStorage.removeItem('user');
        // Redirect to login page
        history('/login');
        toast.success("Đăng xuất thành công");
    }, [history]);
    return (

        <div>
            <h1>Logging out...</h1>
        </div>
    );
}

export default LogoutPage;
