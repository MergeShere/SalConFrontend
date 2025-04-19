import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPasswordForm from './components/auth/ForgotPasswordForm';
import OTPVerification from './components/auth/OTPVerification';
import ResetPasswordForm from './components/auth/ResetPasswordForm';

const AppRoutes = () => {
    const handleForgotPasswordSubmit = (email: string) => {
        console.log(email);
    };
  
    const handleOTPVerification = (otp: string) => {
        console.log(otp);
    };
  
    const handleResetPassword = (newPassword: string) => {
       console.log(newPassword);
    };
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ForgotPasswordForm onSubmit={handleForgotPasswordSubmit} />} />
          <Route path="/otp-verification" element={<OTPVerification email="example@email.com" onVerify={handleOTPVerification} />} />
          <Route path="/Reset-Password" element={<ResetPasswordForm onSubmit={handleResetPassword} />} />
        </Routes>
      </BrowserRouter>
  
  );
};

export default AppRoutes;

