import React from 'react';
import ContactForm from './ContactForm';
import PageBackground from '../Shared/PageBackground';

function Contact() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] flex items-center justify-center font-poppins">
      <div className="max-w-3xl w-full py-16 px-4 xs:px-6 lg:px-8 ">
       <PageBackground pageBackgroundTitle={'CONTACT'} pageTitle={'Get In Touch'}/>
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;

