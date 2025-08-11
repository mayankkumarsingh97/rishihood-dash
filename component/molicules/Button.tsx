import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    loading?: boolean;
    error?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
    children,
    loading = false,
    error = false,
    disabled = false,
    onClick,
    type = 'button',
    className = '',
}) => {
    return (
        <button
            type={type}
            className={`btn ${error ? 'btn-error' : ''} ${className}`}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? (
                <span className="spinner" aria-label="Loading..." />
            ) : (
                children
            )}
        </button>
    );
};

export default Button;