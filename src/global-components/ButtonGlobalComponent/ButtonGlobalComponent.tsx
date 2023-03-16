import React from "react";
import "./ButtonGlobalComponent.scss";

interface ButtonProps {
    text: string;
    icon: string;
    className: string;
}

export const ButtonGlobalComponent: React.FC<ButtonProps> = ({ text, icon, className }) => {
    return (
        <button className={`global-button ${className}`}>
            <img src={icon} />
            <span>{text}</span>
        </button>
    )
};
