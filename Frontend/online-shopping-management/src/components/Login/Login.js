import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/authServices";
import "./Login.css";
function Login() {
    const history = useNavigate();
    const [seller_username, setEmail] = useState('');
    const [seller_password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            const res = await login(seller_username, seller_password);
            if (res.data === "Login successfully") {
                history("/home", { state: { id: seller_username } });
            } else {
                alert("User have not sign up");
            }
        } catch (e) {
            alert("Wrong details");
            console.error(e);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <input type="submit" value="Login" />
            </form>
            <p>OR</p>
            <Link to="/signup">Signup Page</Link>
        </div>
    );
}

export default Login;
