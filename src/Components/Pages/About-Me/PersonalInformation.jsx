import React from 'react';
const PersonalInformation = ({ label, value }) => {
    return (
        <p className="mb-2 border-information">
            <strong>{label}:</strong> {value}
        </p>
    );
};
export default PersonalInformation