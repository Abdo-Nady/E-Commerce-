function NotFound() {
    return (
        <div
            style={{
                height: "100vh",
                background: "#0d0d0d",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "20px",
            }}
        >
            <h1 style={{ fontSize: "6rem", margin: 0, fontWeight: "900" }}>404</h1>
            <h2 style={{ marginTop: "10px", fontSize: "2rem", opacity: 0.8 }}>
                Page Not Found
            </h2>

            <p style={{ maxWidth: "400px", opacity: 0.7, marginTop: "10px" }}>
                The page you're looking for doesn’t exist…

            </p>

            <a
                href="/"
                style={{
                    marginTop: "25px",
                    padding: "12px 25px",
                    borderRadius: "8px",
                    background: "white",
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: "none",
                    transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
                Go Home
            </a>
        </div>
    );
}

export default NotFound;