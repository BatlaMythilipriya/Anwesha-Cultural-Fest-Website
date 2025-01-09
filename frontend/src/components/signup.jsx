import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import './signup.css'; 

function Signup() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting } 
    } = useForm();

    const navigate = useNavigate();

    async function onSubmit(data) {
        const { name, email, password } = data;
    
        try {
            const url = "http://localhost:5178/auth/signup";  
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const result = await response.json();
            const { success, message, error } = result;
    
            if (success) {
                alert(message); 
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else if (error) {
                const details = error?.details[0]?.message || "An error occurred";
                alert(details);
            } else {
                alert(message || "Signup failed");
            }
        } catch (err) {
            alert(`Error: ${err.message}`);
        }
    }
    

    return (
        <div id="signup-container">
            <form id="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 id="form-heading-signup">SIGNUP</h2>

                <div className="form-group-signup">
                    <label htmlFor="name" className="form-label-signup">Name</label>
                    <input 
                        id="name-signup" 
                        className="form-input-signup"
                        {...register("name", {
                            required: "Name is required",
                            minLength: {
                                value: 3,
                                message: "Minimum length of 3 is required",
                            },
                        })} 
                    />
                    {errors.name && <p className="error-message-signup">{errors.name.message}</p>}
                </div>

                <div className="form-group-signup">
                    <label htmlFor="email" className="form-label-signup">Email</label>
                    <input 
                        id="email-signup" 
                        className="form-input-signup"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address",
                            },
                        })} 
                    />
                    {errors.email && <p className="error-message-signup">{errors.email.message}</p>}
                </div>

                <div className="form-group-signup">
                    <label htmlFor="password" className="form-label-signup">Password</label>
                    <input 
                        id="password" 
                        type="password"
                        className="form-input-signup"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Minimum length of 6 is required",
                            },
                        })} 
                    />
                    {errors.password && <p className="error-message-signup">{errors.password.message}</p>}
                </div>

                <button 
                    id="submit-button" 
                    className="form-button-signup" 
                    type="submit" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <span className="login-link-signup">Already have an account? 
                    <Link to="/login"> Login</Link>
                </span>
            </form>
        </div>
    );
}

export default Signup;