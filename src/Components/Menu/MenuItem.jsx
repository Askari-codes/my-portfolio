import React from 'react';

const MenuItem = ({ label, href }) => (
  <a
    href={href}
    className={`block py-4 px-2 w-full text-xl text-white hover:bg-gray-700 ${label==='Contact'?'':'border-b'} border-gray-600`}
    style={{ backgroundColor: 'black' }}
  >
    {label}
  </a>
);

export default MenuItem;
