// AppointmentForm Component
import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        doctor: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="appointment-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="date">Fecha:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="doctor">Doctor:</label>
                <input
                    type="text"
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Agendar Cita</button>
        </form>
    );
};

export default AppointmentForm;
