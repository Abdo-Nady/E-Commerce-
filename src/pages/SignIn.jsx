import { useState } from "react";
import { useNavigate } from "react-router";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div
            style={{
                height: "100vh",
                background: "#0d0d0d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "400px",
                    background: "#121212",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.05)",
                    color: "white",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "25px",
                        fontWeight: "800",
                        letterSpacing: "1px",
                    }}
                >
                    Sign In
                </h2>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", marginBottom: "8px" }}>
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid #333",
                                background: "#1a1a1a",
                                color: "white",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", marginBottom: "8px" }}>
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid #333",
                                background: "#1a1a1a",
                                color: "white",
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "12px",
                            background: "#ffffff",
                            color: "black",
                            borderRadius: "8px",
                            border: "none",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: ".3s",
                        }}
                        onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                        onMouseOut={(e) => (e.target.style.opacity = "1")}
                    >
                        Login
                    </button>
                </form>

                <p style={{ marginTop: "15px", textAlign: "center", opacity: 0.7 }}>
                    Don’t have an account?{" "}
                    <a href="/signup" style={{ color: "#aaa" }}>Register</a>
                </p>
            </div>
        </div>
    );
}

export default SignIn;
