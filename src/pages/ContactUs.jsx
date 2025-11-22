import { useForm } from "react-hook-form"; // React Hook Form for form management
import { yupResolver } from "@hookform/resolvers/yup"; // Yup resolver for react-hook-form
import PhoneInput from "react-phone-input-2"; // Phone input component
import "react-phone-input-2/lib/style.css"; // Phone input styles
import * as Yup from "yup"; // Yup for validation
import { useState } from "react";

// react-hook-form           @hookform/resolvers         yup         react-phone-input-2

function ContactUs() {
    const [success, setSuccess] = useState(false);

    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),

        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),

        message: Yup.string()
            .required("Message is required")
            .min(10, "Minimum 10 characters")
            .max(500, "Maximum 500 characters"),

        phone: Yup.string().optional(),
    });



    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        console.log("Submitted Data:", data);

        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);

        reset();
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#0d0d0d",
                color: "white",
                display: "flex",
                justifyContent: "center",
                padding: "40px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "500px",
                    background: "#121212",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 0 20px rgba(255,255,255,0.05)",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Contact Us
                </h2>

                {success && (
                    <div
                        style={{
                            background: "#22bb3322",
                            padding: "12px",
                            borderRadius: "8px",
                            marginBottom: "15px",
                            color: "#44dd66",
                            fontWeight: "600",
                            textAlign: "center",
                        }}
                    >
                        Thanks for reaching out! We’ll get to you soon.
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ marginBottom: "15px" }}>
                        <label>Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            style={inputStyle}
                        />
                        {errors.email && (
                            <p style={errStyle}>{errors.email.message}</p>
                        )}
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label>First Name</label>
                        <input
                            type="text"
                            {...register("firstName")}
                            style={inputStyle}
                        />
                        {errors.firstName && (
                            <p style={errStyle}>{errors.firstName.message}</p>
                        )}
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label>Last Name</label>
                        <input
                            type="text"
                            {...register("lastName")}
                            style={inputStyle}
                        />
                        {errors.lastName && (
                            <p style={errStyle}>{errors.lastName.message}</p>
                        )}
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label>Phone Number (Optional)</label>

                        <PhoneInput
                            country={"eg"}
                            onChange={(value) => setValue("phone", value)}
                            inputStyle={{
                                width: "100%",
                                background: "#1a1a1a",
                                border: "1px solid #333",
                                color: "white",
                            }}
                            buttonStyle={{
                                background: "#1a1a1a",
                                border: "1px solid #333",
                            }}
                            dropdownStyle={{
                                backgroundColor: "white",
                                color: "black",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label>Message</label>
                        <textarea
                            rows={5}
                            {...register("message")}
                            style={{ ...inputStyle, resize: "none" }}
                        />
                        {errors.message && (
                            <p style={errStyle}>{errors.message.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "12px",
                            background: "#fff",
                            color: "black",
                            borderRadius: "8px",
                            border: "none",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "10px",
    background: "#1a1a1a",
    border: "1px solid #333",
    borderRadius: "8px",
    color: "white",
    marginTop: "5px",
};

const errStyle = {
    color: "#ff6666",
    fontSize: "13px",
    marginTop: "5px",
};

export default ContactUs;
