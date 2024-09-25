import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { emailJsConfig } from '../../../Layout/layout';
import ContactItems from './ContatctItems';
import { contactContect, toastContent } from '../../../Data/Data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                emailJsConfig.serviceId,
                emailJsConfig.templateId,
                e.target,
                emailJsConfig.userId
            )
            .then(
                () => {
                    toast.success(toastContent.success, {
                        className: 'flex items-center bg-[var(--color-primary)] text-[var(--color-white)] rounded-md shadow-md',
                        progressClassName: 'bg-[var(--color-blue-500)] h-1',
                        icon: (
                            <div className="flex items-center justify-center h-8 w-8 rounded-full text-[var(--color-white)]">
                                <FaCheckCircle className="text-[var(--color-white)]" />
                            </div>
                        ),
                    });
            
                    setFormData({ name: '', email: '', message: '' });
                },
                () => {
                    toast.error(toastContent.error, {
                        className: 'flex items-center bg-[var(--color-secondary)] text-[var(--color-white)] rounded-md shadow-md',
                        progressClassName: 'bg-[var(--color-accent)] h-1',
                        icon: (
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--color-white)]">
                                <FaExclamationCircle className="text-[var(--color-secondary)]" />
                            </div>
                        ),
                    });
                }
            );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
   
    return (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:ml-24 xl:ml-20 2xl:ml-16">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="p-1 text-sm font-medium">
                        {contactContect.emailBoxTexts.labelNames.name}
                    </label>
                    <input
                        placeholder={contactContect.emailBoxTexts.placeHolderTexts.name}
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="emailBox-input"
                    />
                </div>
                <div>
                    <label className="p-1 text-sm font-medium">
                        {contactContect.emailBoxTexts.labelNames.email}
                    </label>
                    <input
                        placeholder={contactContect.emailBoxTexts.placeHolderTexts.email}
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="emailBox-input"
                    />
                </div>
                <div>
                    <label className="p-1 text-sm font-medium">
                        {contactContect.emailBoxTexts.labelNames.message}
                    </label>
                    <textarea
                        placeholder={contactContect.emailBoxTexts.placeHolderTexts.commentBox}
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="emailBox-input"
                    ></textarea>
                </div>
                <div className="text-center lg:text-left">
                    <button
                        type="submit"
                        className="w-full xs:w-auto py-[10px] px-[20px] bg-[var(--color-blue-500)] text-[var(--color-white)] hover:bg-[var(--color-secondary)] rounded-md border-none cursor-pointer font-medium transition-colors duration-200"
                    >
                        Send Message
                    </button>
                </div>
            </form>
            <ContactItems />
            <ToastContainer />
        </div>
    );
};

export default ContactForm;
