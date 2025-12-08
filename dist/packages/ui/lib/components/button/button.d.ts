import { default as React } from 'react';
export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
}
export declare function Button({ children, variant, size, disabled, onClick, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export default Button;
