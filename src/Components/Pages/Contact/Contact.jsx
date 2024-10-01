import React from 'react';
import ContactForm from './ContactForm';
import PageBackground from '../Shared/PageBackground';
import { contactContect } from '../../../Data/Data';

function Contact() {
  return (
    <div className="flex justify-center bg-[--background-application] text-[--color-text-primary] font-poppins">
      <div className="w-full max-w-3xl py-16 px-4 xs:px-6 lg:px-8">
        <PageBackground pageBackgroundTitle={contactContect.pageBackgroundTitle} />
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;

