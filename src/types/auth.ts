import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';

export interface AuthLayoutProps {
  children: ReactNode;
  showBackgroundImage?: boolean;
  title?: string;
  showLogo?: boolean;
  centerContent?: boolean;
  backgroundImage?: string;
}

export interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'primary' | 'outline';
  isLoading?: boolean;
}

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
}

export interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}