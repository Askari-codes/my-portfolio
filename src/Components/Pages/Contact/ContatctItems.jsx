import React from 'react';
import { contactContect } from '../../../Data/Data';

function ContactItems() {
  return (
    <div className="space-y-8 mt-4 font-poppins  ">
      {contactContect.addresses.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="flex-shrink-0 ">
            <item.icon className="w-[1.5rem] h-[1.5rem] text-[--color-secondary] hover:text-[--color-primary]  " />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium ">{item.title}</h4>
            <p className="">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactItems;
