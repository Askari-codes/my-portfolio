import React from 'react';
import { contactContect } from '../../../Data/Data';

function ContactItems() {
  return (
    <div className="mt-4 space-y-8 font-poppins">
      {contactContect.addresses.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="flex-shrink-0">
            <item.icon className="w-[1.5rem] h-[1.5rem] text-[--text-icon-contact] hover:text-[--text-icon-contact-hover]" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium">{item.title}</h4>
            <p className="">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactItems;

