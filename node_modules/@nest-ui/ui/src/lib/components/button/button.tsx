import React from 'react';
import styles from './button.module.scss';

export interface ButtonProps {
  children: React.ReactNode; // 버튼내용
  variant?: 'primary' | 'secondary' | 'outline'; // 버튼종류
  size?: 'small' | 'medium' | 'large'; // 버튼크기
  disabled?: boolean; // 활성화
  isLoading?: boolean; // 로딩
  onClick?: () => void;
}

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
