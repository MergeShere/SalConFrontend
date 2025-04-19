export interface ForgotPasswordFormProps {
    onSubmit: (email: string) => void;
  }
  
  export interface OTPVerificationProps {
    email: string;
    onVerify: (otp: string) => void;
  }
  
  export interface ResetPasswordFormProps {
    onSubmit: (newPassword: string)=>void;
  }