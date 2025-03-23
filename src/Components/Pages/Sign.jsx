import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Sign() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format.';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = users.find(user => user.email === formData.email && user.password === formData.password);

        if (foundUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
            alert('Login successful!');
            navigate('/');
        } else {
            alert( 'Invalid email or password.' );
        }
    };

    return (
        <>
            <Navbar />
            <div style={{
                marginTop: '120px'
            }}>
                <div className="text-center mt-6">
                    <h6 className="section-title bg-white text-primary px-3 ">Sign In Page</h6>
                    <h1 className="mb-5">Sign In</h1>
                </div>
                <div className="signin container" style={{ height: "50vh", minWidth: "70%" }}>
                    {errors.global && <div className="alert alert-danger text-center">{errors.global}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                placeholder='Email address'
                                className={`form-control ${errors.email ? 'border border-danger' : ''}`}
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                className={`form-control ${errors.password ? 'border border-danger' : ''}`}
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary me-4">Submit</button>
                            <Link to="/register" className="btn btn-primary">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
