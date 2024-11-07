// src/components/Button.jsx
import React from 'react';

function Button({ children, className, onClick, ...props }) {
    return (
        <button
            className={` ${className}`}
            onClick={onClick}
            {...props} // Allows passing additional props like type, disabled, etc.
        >
            {children}
        </button>
    );
}

export default Button;
