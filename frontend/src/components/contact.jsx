import React from "react";
import './contact.css';
import { useForm } from "react-hook-form";

function Contact() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting } 
    } = useForm();

    
     async function onSubmit(data) {

        try {
            const response = await fetch('http://localhost:5178/auth/remark', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            alert('Remark submitted successfully!');
        } catch (error) {
            console.error('Error submitting remark:', error);
            alert('Failed to submit remark. Please try again later.');
        }
    }

    return (
        <div className="contact-wrapper-contact">
            <form className="contact-form-contact" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="form-title-contact">Contact Us</h2>
                <div className="input-group-contact">
                    <label htmlFor="userName-contact" className="input-label-contact">Name</label>
                    <input 
                        id="userName-contact" 
                        className="input-field-contact"
                        {...register("name", {
                            required: "Name is required",
                            minLength: {
                                value: 3,
                                message: "Minimum length of 3 is required",
                            },
                        })} 
                    />
                    {errors.name && <p className="error-text-contact">{errors.name.message}</p>}
                </div>

                <div className="input-group-contact">
                    <label htmlFor="userEmail-contact" className="input-label-contact">Email</label>
                    <input 
                        id="userEmail-contact" 
                        className="input-field-contact"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address",
                            },
                        })} 
                    />
                    {errors.email && <p className="error-text-contact">{errors.email.message}</p>}
                </div>

                <div className="input-group-contact">
                    <label htmlFor="userMessage-contact" className="input-label-contact">Message</label>
                    <textarea 
                        id="userMessage-contact" 
                        className="message-field-contact"
                        {...register("message", {
                            required: "Message is required",
                            maxLength: {
                                value: 100,
                                message: "Maximum of 100 characters allowed",
                            },
                        })} 
                    />
                    {errors.message && <p className="error-text-contact">{errors.message.message}</p>}
                </div>

                <button 
                    className="submit-btn-contact" 
                    type="submit" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default Contact;
