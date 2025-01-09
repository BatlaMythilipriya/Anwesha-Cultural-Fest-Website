import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './login.css';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            const url = "http://localhost:5178/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const result = await response.json();
            const { success, message, jwtToken, name, anweshaId, error } = result;
    
            if (success) {
                alert(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                localStorage.setItem('anweshaId', anweshaId); 
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else if (error) {
                const details = error?.details[0]?.message || "An error occurred.";
                alert(details);
            } else if (!success) {
                alert(message);
            }
        } catch (err) {
            alert("An unexpected error occurred: " + err.message);
        }
    };
    

    return (
        <div id="login-container">
            <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 id="form-heading-login">Login</h2>
                <div className="form-group-login">
                    <label htmlFor="email" className="form-label-login">Email</label>
                    <input
                        id="email-login"
                        className="form-input-login"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address",
                            },
                        })}
                    />
                    {errors.email && <p className="error-message-login">{errors.email.message}</p>}
                </div>

                <div className="form-group-login">
                    <label htmlFor="password" className="form-label-login">Password</label>
                    <input
                        id="password-login"
                        className="form-input-login"
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long",
                            },
                        })}
                    />
                    {errors.password && <p className="error-message-login">{errors.password.message}</p>}
                </div>

                <button
                    id="submit-button-login"
                    className="form-button-login"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>
                <p className="form-footer-login">
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </form>
        </div>
    );
}

export default Login;