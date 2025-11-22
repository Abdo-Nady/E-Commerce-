import { useState } from "react";
import { useNavigate } from "react-router";

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();


    const name_rgx = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/;
    const email_rgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const username_rgx = /^\S+$/;
    const password_rgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        const errs = [];

        if (!name_rgx.test(name)) errs.push("Full name must contain at least two words");
        if (!email_rgx.test(email)) errs.push("Email format is invalid");
        if (!username_rgx.test(username)) errs.push("Username must contain no spaces");
        if (!password_rgx.test(password))
            errs.push("Password must be at least 8 chars, contain lowercase, uppercase, digit, and special char");
        if (password !== confirmPassword) errs.push("Passwords do not match");

        if (errs.length > 0) {
            setErrors(errs);
            return;
        }

        const data = {
            name,
            email,
            username,
            password,
        };

        alert(JSON.stringify(data, null, 2));
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
                    Sign Up
                </h2>

                {errors.length > 0 && (
                    <div
                        style={{
                            background: "#ff4d4d22",
                            padding: "12px",
                            borderRadius: "8px",
                            marginBottom: "15px",
                            color: "#ff6666",
                            fontSize: "14px",
                        }}
                    >
                        {errors.map((err, i) => (
                            <div key={i}>• {err}</div>
                        ))}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "20px" }}>
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

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
                        <label>Email</label>
                        <input
                            type="email"
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
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}

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
                        <label>Password</label>
                        <input
                            type="password"
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

                    <div style={{ marginBottom: "20px" }}>
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}

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
                    >
                        Create Account
                    </button>
                </form>

                <p style={{ marginTop: "15px", textAlign: "center", opacity: 0.7 }}>
                    Already have an account?{" "}
                    <a href="/signin" style={{ color: "#aaa" }}>
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
