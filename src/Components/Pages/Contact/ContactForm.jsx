import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { emailJsConfig } from '../../../Layout/layout';
import ContactItems from './ContatctItems';
import { contactContect } from '../../../Data/Data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from 'react-icons/fa';

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
                (result) => {
                    console.log('result', result);

                    toast.success('Email successfully sent!', {
                        className: 'bg-[--color-primary] text-[--color-white] flex items-center rounded-md',
                        progressClassName: 'bg-[--color-white] h-1',
                        icon: (
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[]">
                                <FaCheckCircle className="text-[--color-green]" />
                            </div>
                        ),
                    });

                    setFormData({ name: '', email: '', message: '' });
                },
                () => {
                    toast.error('Operation failed!', {
                        className: 'flex items-center rounded-md',
                        style: {
                            backgroundColor: 'var(--color-error)',
                            color: 'var(--color-white)'
                        },
                        progressStyle: {
                            backgroundColor: 'var(--color-white)',
                            height: '1px'
                        },
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
    const defaultClassName = 'ToastPreogress';
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className=" text-sm font-medium p-1">{contactContect.emailBoxTexts.labelNames.name}</label>
                    <input
                        placeholder={contactContect.emailBoxTexts.placeHolderTexts.name}
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="emailBox-input "
                    />
                </div>
                <div>
                    <label className=" text-sm font-medium p-1">{contactContect.emailBoxTexts.labelNames.email}</label>
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
                    <label className=" text-sm font-medium p-1">{contactContect.emailBoxTexts.labelNames.message}</label>
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
                        className="w-full xs:w-auto  bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] rounded-md text-[var(--color-white)] border-none py-[10px] px-[20px] cursor-pointer font-medium transition-colors duration-200"
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
