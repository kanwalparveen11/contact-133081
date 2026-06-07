import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Credentials check (Paper Requirement: admin / admin)
        if (username === "admin" && password === "admin") {
            login(username, password); // Context wala function call kiya
            navigate("/"); // Home page par bheja
        } else {
            setError("Invalid credentials. Try admin/admin");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br /><br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />
                <button type="submit">Login</button>
            </form>

            {/* Error dikhane ke liye paragraph */}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default LoginPage;