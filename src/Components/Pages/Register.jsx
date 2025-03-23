import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password1: '',
        password2: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            navigate('/');
        }
    }, [navigate]);

    const validateEmail = (email) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    const validatePassword = (password) => {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.email || !validateEmail(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.password1 || !validatePassword(formData.password1)) newErrors.password1 = 'Password must be at least 6 characters long and contain both letters and numbers';
        if (formData.password1 !== formData.password2) newErrors.password2 = 'Passwords do not match';

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        if (existingUsers.some(user => user.email === formData.email)) {
            newErrors.email = 'Email already registered';
        }
        if (existingUsers.some(user => user.phone === formData.phone)) {
            newErrors.phone = 'Phone number already registered';
        }

        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            const newUser = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                password: formData.password1 
            };
            localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
            localStorage.setItem('loggedInUser', JSON.stringify(newUser));
            alert('Registration successful!');
            
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    };

    return (
        <>
            <Navbar />
            <div  style={{ minHeight: "70vh", margin: '120px auto 0', padding: '0 50px' }}>
                <div className="text-center">
                    <h6 className="section-title bg-white text-primary px-3">Sign Up Page</h6>
                    <h1 className="mb-5">User Register</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    {['name', 'phone', 'email', 'password1', 'password2'].map((field, index) => (
                        <div className="row mb-3" key={index}>
                            <label htmlFor={field} className="col-sm-2 col-form-label">
                                {field === 'password1' ? 'Password' : field === 'password2' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    className={`form-control ${errors[field] ? 'border border-danger' : ''}`}
                                    id={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                />
                                {errors[field] && <div className="text-danger mt-1">{errors[field]}</div>}
                            </div>
                        </div>
                    ))}
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}
