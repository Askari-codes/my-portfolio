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
                        className: 'flex items-center bg-[--background-toast-success] text-[--color-white] rounded-md shadow-md',
                        progressClassName: 'bg-[--color-green-400] h-1',
                        icon: (
                            <div className="flex items-center justify-center mr-4  text-[--color-white]">
                                <FaCheckCircle className="text-[--color-white] text-xl    " />
                            </div>
                        ),
                    });
            
                    setFormData({ name: '', email: '', message: '' });
                },
                () => {
                    toast.error(toastContent.error, {
                        className:'bg-white',
                        progressClassName:'bg-[--background-progress-error-toast]',
                        icon: (
                            <div className={'bg-[--color-white]'} >
                                <FaExclamationCircle className='text-[--text-icon-toast-error]'  />
                            </div>
                        ),
                    })
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
                    <label className="p-1 text-sm font-medium text-[--text-label-email-input]">
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
                        spellCheck={false}
                    />
                </div>
                <div>
                    <label className="p-1 text-sm font-medium text-[--text-label-email-input]">
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
                        spellCheck={false}
                    />
                </div>
                <div>
                    <label className="p-1 text-sm font-medium text-[--text-label-email-input]">
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
                        spellCheck={false}
                    ></textarea>
                </div>
                <div className="text-center lg:text-left">
                    <button
                        type="submit"
                        className="w-full xs:w-auto py-[10px] px-[20px] bg-[--background-button] text-[--color-gray-700] hover:bg-[--background-button-hover] rounded-md border-none cursor-pointer font-medium transition-colors duration-200"
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
